import { memo } from "react"

interface Props {
    width?: string
    height?: string
    title?: string
    classes?: string
}

const SpinnerIcon:React.FunctionComponent<Props> = memo(({width, height, classes}) => {

    return (
        <>
            <svg xmlns="http://www.w3.org/2000/svg"
                width={width ?? "41"}
                height={height ?? "40"}
                viewBox="0 0 41 40"
                fill="none"
                className={`${classes ?? ''} animate-spin mx-auto mb-[0.5rem]`}>
                <g strokeWidth="5">
                <circle cx="20.5" cy="20" r="17.5" stroke="#B8CAF2"></circle>
                <path stroke="#0782FF" strokeLinecap="round" d="M20.902 2.5C30.345 2.5 38 10.335 38 20c0 4.284-1.504 8.208-4 11.25">
                </path>
                </g>
            </svg>
        </>
    )
});

SpinnerIcon.displayName = "SpinnerIcon";
export default SpinnerIcon