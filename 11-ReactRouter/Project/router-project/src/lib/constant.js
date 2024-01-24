import axios from "axios";
import { baseUrl } from "../service/baseUrl";

export const API_URL = axios.create({
  baseURL: baseUrl,
});
