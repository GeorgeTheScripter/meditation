import axios, { type AxiosInstance } from 'axios';

export const API_ROUTES = {
  meditations: '/meditations',
};

export const http: AxiosInstance = axios.create({
  baseURL: 'http://localhost:3000/api',
});
