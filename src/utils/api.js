import axios from "axios";

const host = `${window.location.protocol}//${window.location.host}`;
export let base = "http://localhost:4000";

export const axiosBase = axios.create({
  baseURL: `${base}`,
  headers: {
    "Content-Type": "application/json",
    "accept-language": "en",
    "Access-Control-Allow-Origin": host,
  },
});
