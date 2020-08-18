import axios from "axios";
import {apiUrl} from "./config";


export const createShortUrl = obj => {
  
  return axios.post(apiUrl,obj);
};