import { useAppSelector } from "@/app/services/reduxstore/hooks";

const useArchiveStoreService = () => {

    const con = useAppSelector(state => state.search);
    
    const getArchiveStore = () => {
        return con.login
    }

    return {
        getArchiveStore,
    }
}

export default useArchiveStoreService

