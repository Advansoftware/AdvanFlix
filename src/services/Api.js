import axios from "axios";

const Api = axios.create({
  baseURL: "https://advansoftware.tech:8443/jellyfin/",
});

export default Api;