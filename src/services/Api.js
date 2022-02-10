import axios from "axios";

const Api = axios.create({
  baseURL: "http://advansoftware.tech:8096",
});

export default Api;