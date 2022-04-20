import axios from "axios";

const Api = axios.create({
  baseURL: "https://advansoftware.tech:8443/",
});

export default Api;