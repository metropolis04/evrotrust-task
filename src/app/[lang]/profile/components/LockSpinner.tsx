import  SpinnerIcon from "@/app/utils/icons"

export default function LockSpinner() {

    return (
        <>
            <div className="absolute flex w-full h-full flex-row items-center justify-center left-0 top-0" style={{ opacity:'0.5',zIndex:'11'}} >
                <div className="tags-selection-open">
                        <SpinnerIcon width='30' height='30' />
                </div>
            </div>
        </>
    )
}