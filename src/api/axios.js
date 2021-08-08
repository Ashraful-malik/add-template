import axios from "axios";
import cookies from "js-cookie";

export default axios.create({
  baseURL: `https://templatezone.herokuapp.com/`,
  headers: {
    Authorization: cookies.get("token"),
  },
});
