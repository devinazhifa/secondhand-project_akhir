import axios from "axios";
import { store } from "./store/store";

let BASE_URL = "https://ancient-everglades-98776.herokuapp.com/api";

export { BASE_URL };

const requestAPI = () => {
  const token = store.getState().user.data?.token;
  const authorization = token ? { Authorization: token } : {};
  console.log(token);

  return axios.create({
    baseURL: BASE_URL,
    headers: authorization,
  });
};

export default requestAPI;
