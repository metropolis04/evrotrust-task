import styles from "../../profile/utils/login.module.css";
import type { DictType } from "../../dictonaries";

export default function WaitingClientPage({email, dict}: {email: string, dict: DictType}) {

    return (
        <>
            <div className="min-h-[80vh] h-screen flex flex-row items-center justify-center bg-gray-100" >
                    <div className="px-24 py-8 relative bg-grey-200">
                        <div className={` ${styles.loginContainer} items-center w-full flex min-h-full flex-col justify-center relative`}>
                             <h6>{email}, {dict.resetpasswordpage.waiting_response}</h6>
                        </div>
                    </div>   
            </div>
        </>
    )
}