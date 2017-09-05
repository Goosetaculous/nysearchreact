import axios from "axios";
const BASEURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=";
const SEARCH = "&q=";
const KEY = "b9f91d369ff59547cd47b931d8cbc56b:0:74623931";

export default {
    search: function(query,startYear,EndYear) {
        if(startYear){
            query = `${query}&begin_date=${startYear}0101`
        }
        if(EndYear){
            query = `${query}&end_date=${EndYear}0101`
        }
        console.log(BASEURL + KEY + SEARCH+query)
        return axios.get(BASEURL + KEY + SEARCH+query + '?sort=newest');
    }
};

