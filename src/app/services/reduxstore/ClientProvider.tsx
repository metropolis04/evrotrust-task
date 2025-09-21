'use client'

import React, { ReactNode } from "react"
import { Provider } from "react-redux"
import { store } from "./store"

interface Props {
    children : ReactNode
}

export const ClientPrevider:React.FunctionComponent<Props> = ({children}) => {

    return (
        <>
            <Provider store={store}>
                {children}
            </Provider>
        </>
    )
}