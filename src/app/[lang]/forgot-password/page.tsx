import { ForgotPasswordClient } from "./components/ForgotPasswordClient";
import { getDictionary } from "../dictonaries";
import { getAuth } from "@/app/utils/services/authService";
import WaitingClientPage from "./components/WaitingClientPage";

export default async function ForgotPasswordPage({
  params,
}: {
  params: Promise<{ lang: 'en' | 'bg' }>
}) {
    const { lang } = await params;
    const dict = await getDictionary(lang);
    const authData = await getAuth();
    if (authData.resetData && authData.resetData.email && authData.resetData.reset ) {
      return (
        <>
          <WaitingClientPage email={authData.resetData?.email} dict={dict} />
        </>
      )
    }
    return (
        <>
            <div className="min-h-[90vh] h-screen flex flex-row justify-center bg-grey-400" >
                <ForgotPasswordClient dict={dict} />
            </div>
        </>
    )
}