import axios from "axios";

const http = axios.create({

    baseURL : "http://localhost:3322/",
    headers:{"content-type":"application/json"}

})

export default http