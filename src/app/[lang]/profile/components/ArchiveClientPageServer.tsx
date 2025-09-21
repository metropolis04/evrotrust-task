import ArchivePreviewComponent from "./ArchivePreviewComponent";
import type { AuthDataType } from "@/app/utils/services/authService";

export default async function ArchiveClientPageServer({authData}: { authData: AuthDataType}) {

    return (
        <>
            <div className="flex flex-row w-full mt-12">
                <div className="flex-1 flex flex-row w-full border-r border-1 border-grey-100 justify-center pt-4" >
                    <ArchivePreviewComponent />
                </div>
                
                <div className="basis-1/3">
                    <h6>Profile right panel</h6>
                </div>
            </div>
        </>
    )
}