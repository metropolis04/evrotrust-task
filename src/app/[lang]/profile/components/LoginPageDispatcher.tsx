'use client'
import React from "react"
import { useState } from "react";
import { LoginPageForm } from "./LoginPageForm"
import { DictType } from "../../dictonaries";

export default function LoginPageDispatcher({dict}: {dict: DictType}) {

    const [loadResource, setLoadResource] = useState<boolean>(false);
    
    return (
        <>
            <div className="min-h-[80vh] h-screen flex flex-row items-center justify-center bg-gray-100" >
                <LoginPageForm 
                    loadResource={loadResource} 
                    setLoadResource={setLoadResource}
                    dict={dict}
                />
            </div>
        </>
    )
}