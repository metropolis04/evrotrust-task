'use client'

import { useAppDispatch, useAppSelector } from "@/app/services/reduxstore/hooks";
import { updatesearch } from "@/app/services/reduxstore/store";
import { postFetchAsync } from "@/app/utils/clientApi";
import LockSpinner from "../../profile/components/LockSpinner";
import { setCookie } from "cookies-next";
import { useState } from "react";
import { useRouter } from 'next/navigation';
import { FormEvent } from "react";
import type { UserClient, ClientLoginResponse } from "@/app/utils/users";
import styles from '../utils/reset.module.css'
import  BasicButton  from "@/app/utils/components/@library/Buttons";
import { BasicInput } from "@/app/utils/components/@library/InputComponent";
import type { DictType } from "../../dictonaries";

export function ForgotPasswordClient({dict}: {dict: DictType}) {

    const [errorMessage, setErrorMessage] = useState('');
    const [loadResource, setLoadResource] = useState<boolean>(false);
    const [block, setBlock] = useState<boolean>(false)
    const storeInputs = useAppSelector(state => state.search);
    const dispatch = useAppDispatch();
    const router = useRouter()
    const maxAge = 60 * 60 * 24 * 1;
    
    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        setErrorMessage('');
        setLoadResource(true);
        postFetchAsync<ClientLoginResponse<UserClient>>('/api/send-reset-link', {
            email: storeInputs.login.email,
        }).then((data) => {
            if (!data.success) {
                setErrorMessage(data.error);
                return;
            }
            setBlock(true);
            setCookie("et_reset_token" , data.token, {maxAge, secure : true, sameSite: 'strict'});
            router.refresh();
            // setErrorMessage("We’ve sent you a password reset link. Please check your email.");
        }).catch((error) => {
            console.log(error);
            setErrorMessage('error with request');
        }).finally(() => {
            setLoadResource(false);
        })
    }
    
    return (
        <>
            <div className=" px-24 py-8 items-center relative bg-grey-200 flex flex-row justify-center">
                <div className={` ${styles.resetContainer} items-center w-full flex flex-col justify-center relative`}>
                    <div className="sm:mx-auto sm:w-full sm:max-w-sm border-b-2 border-adata">
                        <h1 className="mt-4 uppercase text-center text-2xl/9 font-bold tracking-tight text-adata-text">
                            {dict.resetpasswordpage.form.title}
                        </h1>
                    </div>
                    <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div>
                            <label htmlFor="email" className="block text-sm/6 font-medium text-gray-900">
                                {dict.resetpasswordpage.form.inputs.email}
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
                            <BasicButton text={dict.resetpasswordpage.form.buttonsubmit} disabled={block} classes="cursor-pointer" />
                        </div>
                    </form>
                    <div className="absolute botton-0">
                        <p className="mt-2 text-center text-sm/6 text-red-500">{errorMessage}</p>
                    </div>
                    </div>
                </div>
                {loadResource ? <LockSpinner /> : null}
            </div>
        </>
    )
}