import axios from "axios";
import { SERVER_BASE_URL } from "./data";

export const server = axios.create({
  baseURL: SERVER_BASE_URL,
});
