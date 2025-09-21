import { useAppSelector, useAppDispatch } from "@/app/services/reduxstore/hooks";
import { updatesearch } from "@/app/services/reduxstore/store";

const useArchiveStoreService = () => {

    const con = useAppSelector(state => state.search);
    const dispatch = useAppDispatch();

    const getArchiveStore = () => {
        return con.login
    }

    

    return {
        getArchiveStore,
    }
}

export default useArchiveStoreService

