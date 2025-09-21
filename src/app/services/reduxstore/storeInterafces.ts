
export interface SearchStoreType {
    login : {
        email : string;
        password : string;
    }
}

export interface FilterStoreType {
    lastmatches : {
        league : string;
        duration : string;
        team : string;
        teamName : string;
    },
    lm_settings : {
        page_units : number;
        page : number;
    }
}