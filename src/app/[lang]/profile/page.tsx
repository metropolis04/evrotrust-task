import LoginPageDispatcher from "./components/LoginPageDispatcher";
import { getAuth } from "@/app/utils/services/authService";
import ArchiveClientPageServer from "./components/ArchiveClientPageServer";
import { getDictionary } from "../dictonaries";

async function ProfilePage({
  params,
}: {
  params: Promise<{ lang: 'en' | 'bg' }>
}) {
    const { lang } = await params;
    const dict = await getDictionary(lang);
    const authData = await getAuth();
    if (authData.isLoggedIn) {
        return (
            <>
                <div className="min-h-[80vh] h-screen flex flex-row justify-center bg-grey-400" >
                    <ArchiveClientPageServer />
                </div>
            </>
        )
    }
    return <LoginPageDispatcher dict={dict} />
}

export default ProfilePage