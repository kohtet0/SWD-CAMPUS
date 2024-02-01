import axios from "axios";
import { baseUrl } from "../lib/constant";

export const API_URL = axios.create({
  baseURL: baseUrl,
});
