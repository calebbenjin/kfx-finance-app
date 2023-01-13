import  React, { createContext, useContext, useEffect, useState } from "react";
import axios, { AxiosRequestConfig } from 'axios'
import { AuthContext } from './AuthContext';


interface FetchProviderProps {
  children: React.ReactNode;
}


const FetchContext = createContext<any | null>(null)
const { Provider } = FetchContext

const FetchProvider = ({ children }: FetchProviderProps) => {
  const authContext = useContext(AuthContext)

  const authAxios = axios.create({
    baseURL: process.env.REACT_APP_API_URL
  });

  authAxios.interceptors.request.use(
    async (config: AxiosRequestConfig) => {
      config.headers = config.headers ?? {}

      config.headers.Authorization = `Bearer ${authContext.authState.token}`
      return config
    },
    (error) => {
      return Promise.reject(error)
    }
  )

  return (
    <Provider
      value={{
        authAxios
      }}
    >
      {children}
    </Provider>
  );
}

export { FetchContext, FetchProvider };
