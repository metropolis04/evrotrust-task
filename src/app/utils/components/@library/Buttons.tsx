import { memo } from "react"

interface BasicButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    text: string
    classes?: string
}

export const BasicButton:React.FunctionComponent<BasicButtonProps> = memo(({text, classes, ...rest}) => {

    return (
        <>
            <button 
                className={`flex w-full justify-center rounded-md px-3 py-1.5 text-sm/6 font-semibold text-white shadow-xs bg-black focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 ${classes}`} 
                {...rest} 
            >
                {text}
            </button>
        </>
    )
}) 