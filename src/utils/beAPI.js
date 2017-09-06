import axios from "axios";
const BASEURL = "/api/test";

export default {
    search: function() {
//        console.log(BASEURL )
        return axios.get( BASEURL );
    }
};

