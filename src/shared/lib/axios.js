import axios from 'axios';

export const instance = axios.create();
instance.defaults.baseURL = process.env.REACT_APP_API_URL;