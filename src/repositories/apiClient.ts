/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable no-console */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */

import {ACCESS_TOKEN_KEY} from '../constants/queryName';
import token from './token';
import axios, {AxiosResponse, AxiosRequestConfig, AxiosError} from 'axios';

const host = 'https://reqres.in/api/';

const apiClient = axios.create({
  baseURL: host,
});

const logOnDev = (message: string, log?: AxiosResponse | AxiosRequestConfig | AxiosError) => {
  if (process.env.NODE_ENV === 'development') {
    console.log(message, log);
  }
};

apiClient.interceptors.request.use(request => {
  const jwtToken: string | null = token.getToken(ACCESS_TOKEN_KEY);
  const {method, url} = request;
  console.log('apiClient', {method, url});

  if (jwtToken) {
    request.headers.Authorization = `Token ${jwtToken}`;
  }

  logOnDev(`🚀 [${method?.toUpperCase()}] ${url} | Request`, request);

  return request;
});

apiClient.interceptors.response.use(
  response => {
    const {method, url} = response.config;
    const {status} = response;

    logOnDev(`✨ [${method?.toUpperCase()}] ${url} | Response ${status}`, response);
    console.log('response.use', response.data);

    return response;
  },
  error => {
    const {message} = error;
    const {status, data} = error.response;
    const {method, url} = error.config;

    logOnDev(
      `🚨 [${method?.toUpperCase()}] ${url} | Error ${status} ${data?.message || ''} | ${message}`,
      error,
    );

    return Promise.reject(error);
  },
);

export default apiClient;
