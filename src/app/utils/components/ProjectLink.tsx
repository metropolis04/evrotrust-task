import Link from "next/link"
import { host } from "../endpoints"
import { ReactNode } from "react"

export default function ProjectLink({section, children, classes}: {section:string, children?: ReactNode, classes?: string}) {

    return (
        <>
            <Link href={`${section}`} className={classes ?? ""} >
                {children}
            </Link>
        </>
    )
}