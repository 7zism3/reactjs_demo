import axios from "axios";

const instance = axios.create({
  // baseURL: "https://60cd9e2591cc8e00178dbb09.mockapi.io/api",
  baseURL: "http://localhost:4000/",
  headers: {
    "Content-Type": "application/json",
  },
});

export default instance;
