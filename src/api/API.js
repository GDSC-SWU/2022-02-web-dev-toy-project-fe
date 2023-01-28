import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:8081",
  headers: {
    "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
  },
  withCredentials: true,
});

export default API;
