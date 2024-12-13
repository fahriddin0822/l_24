import axios from "axios";

const request = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL || "http://localhost:3003",
});

export { request };
