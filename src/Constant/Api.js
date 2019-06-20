import axios from 'axios';
import { SERVER_URL, APP_VERSION } from "./Constant";

const instance = axios.create({
    baseURL: SERVER_URL,
});