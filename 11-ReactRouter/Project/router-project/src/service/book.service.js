import axios from "axios";
import { baseUrl } from "./baseUrl";

export const getBookData = () => {
  axios.get(`${baseUrl}/book`);
};
