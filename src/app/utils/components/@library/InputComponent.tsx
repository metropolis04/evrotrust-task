interface BasicInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    classes?: string
}

export const BasicInput:React.FunctionComponent<BasicInputProps> = ({classes, ...rest}) => {

    return (
        <>
            <input className={`w-full px-3 py-2 outline-none rounded-sm focus:ring-0 bg-white focus:outline-none ${classes}`} { ...rest } />
        </>
    )
}