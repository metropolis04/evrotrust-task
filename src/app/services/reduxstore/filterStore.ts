import type { FilterStoreType } from "./storeInterafces"

const filterStores:FilterStoreType = {

    lastmatches : {
        league : "",
        duration : "",
        team : "",
        teamName : "",
    },
    lm_settings : {
        page_units : 6,
        page : 1,
    }
}

export default filterStores