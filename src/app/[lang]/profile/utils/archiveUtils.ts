const archiveUtils = {
    getIsoDate : (date:Date) => {
        if (date) {

            const pickDate = new Date(date)
            return new Date(pickDate.setDate(pickDate.getDate() + 1)).toISOString().split("T")[0]
        }
    },
}

Object.freeze(archiveUtils);
export default archiveUtils;
