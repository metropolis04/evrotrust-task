'use client'

import { useAppDispatch, useAppSelector } from "@/app/services/reduxstore/hooks";
import { updatesearch } from "@/app/services/reduxstore/store";
import { postFetchAsync } from "@/app/utils/clientApi";
import LockSpinner from "./LockSpinner";
import { setCookie } from "cookies-next";
import { useState } from "react";
import { useRouter } from 'next/navigation';
import { FormEvent } from "react";
import type { UserClient, ClientLoginResponse } from "@/app/utils/users";
import ProjectLink from "@/app/utils/components/ProjectLink";
import styles from '../utils/login.module.css';
import BasicButton from "@/app/utils/components/@library/Buttons";
import { BasicInput } from "@/app/utils/components/@library/InputComponent";
import type { DictType } from "../../dictonaries";

interface Props {
    loadResource: boolean
    setLoadResource: React.Dispatch<React.SetStateAction<boolean>>
    dict: DictType
}


export const LoginPageForm:React.FunctionComponent<Props> = ({ loadResource, setLoadResource, dict }) => {
    
    const [errorMessage, setErrorMessage] = useState('');
    const storeInputs = useAppSelector(state => state.search);
    const dispatch = useAppDispatch();
    const router = useRouter()
    const maxAge = 60 * 60 * 24 * 7;
    
    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        setErrorMessage('');
        setLoadResource(true);
        postFetchAsync<ClientLoginResponse<UserClient>>('/api/login', {
            email: storeInputs.login.email,
            password: storeInputs.login.password,
        }).then((data) => {
            if (!data.success) {
                setErrorMessage(data.error);
                return;
            }
            setLoadResource(false);
            setCookie("nc_token" , data.token, {maxAge, secure : true, sameSite: 'strict'});
            router.refresh();
        }).catch((error) => {
            console.log(error);
            setErrorMessage('error with request');
        }).finally(() => {
            setLoadResource(false);
        })
    }
    
    return (
        <>
            <div className="px-24 py-8 relative bg-grey-200">
                <div className={` ${styles.loginContainer} items-center w-full flex min-h-full flex-col justify-center relative`}>
                    <div className="sm:mx-auto sm:w-full sm:max-w-sm border-b-2 border-adata">
                        <h2 className="mt-10 uppercase text-center text-2xl/9 font-bold tracking-tight text-adata-text">
                            {dict.loginpage.loginform.title}
                        </h2>
                    </div>
                    <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div>
                            <label htmlFor="email" className="block text-sm/6 font-medium text-gray-900">
                                {dict.loginpage.loginform.inputs.email}
                            </label>
                            <div className="mt-2">
                                <BasicInput
                                    id="email"
                                    name="email"
                                    type="email"
                                    onChange={(e) => dispatch(updatesearch({ ...storeInputs, login : { ...storeInputs.login, email: e.target.value } }))}
                                    required={true}
                                />
                            </div>
                        </div>
                        <div>
                            <div className="flex items-center justify-between">
                                <label htmlFor="password" className="block text-sm/6 font-medium text-gray-900">
                                {dict.loginpage.loginform.inputs.password}
                                </label>
                                {/* <div className="text-sm">
                                <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">
                                    Forgot password?
                                </a>
                                </div> */}
                            </div>
                            <div className="mt-2">
                                <BasicInput
                                    id="password"
                                    name="password"
                                    type="password"
                                    required={true}
                                    onChange={(e) => dispatch(updatesearch({ ...storeInputs, login : { ...storeInputs.login, password: e.target.value } }))}
                                />
                            </div>
                        </div>
                        <div>
                            <BasicButton text={dict.loginpage.loginform.buttonSubmit} classes="cursor-pointer" type="submit" />
                        </div>
                    </form>
                    <div className="absolute botton-0">
                        <p className="mt-2 text-center text-sm/6 text-red-500">{errorMessage}</p>
                    </div>
                    <p className="mt-10 text-center text-sm/6 text-gray-500">
                    <ProjectLink section="/forgot-password" classes="font-semibold text-black ">
                        {dict.loginpage.loginform.forgot}
                    </ProjectLink>
                    </p>
                    </div>
                </div>
                {loadResource ? <LockSpinner /> : null}
            </div>
        </>
    )
}