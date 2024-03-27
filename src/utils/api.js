import axios from "axios";

//axios'un ayaralarini bizim belirledigimiz bir ornegini olusturmaya yarar
const api = axios.create({
  baseURL: "https://fakestoreapi.com/",
  timeout: 1000,
});

export default api;
