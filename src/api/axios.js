import axios from "axios";
import cookies from "js-cookie";

export default axios.create({
  baseURL: `https://templatezone.herokuapp.com/`,
  // axios.defaults.baseURL = "http://localhost:5000";
  // axios.defaults.headers.common["Authorization"] =
  // "Bearer " + cookies.get("token");
  // const tok = cookies.get("token");
  headers: {
    Authorization: cookies.get("token"),
  },
});
