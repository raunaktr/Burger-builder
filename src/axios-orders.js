import axios from "axios";

const instance = axios.create({
  baseURL: "https://react-burger-project-f3ea4.firebaseio.com/",
});

export default instance;
