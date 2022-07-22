import axios from "axios";
import { store } from "./store/store";

let BASE_URL = "";

console.log(process.env.REACT_APP_NODE_ENV);
if (process.env.REACT_APP_NODE_ENV === "release") {
  BASE_URL = "https://backend-secondhand-3.herokuapp.com/api";
} else {
  BASE_URL = "https://ancient-everglades-98776.herokuapp.com/api";
}

export { BASE_URL };

const requestAPI = () => {
  const token = store.getState().user.data?.token;
  const authorization = token ? { Authorization: token } : {};

  return axios.create({
    baseURL: BASE_URL,
    headers: authorization,
  });
};

export default requestAPI;
