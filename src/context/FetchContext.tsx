import  React, { createContext, useContext, useEffect, useState } from "react";
import axios from 'axios'
// import { AuthContext } from './AuthContext';


interface FetchProviderProps {
  children: React.ReactNode;
}


const FetchContext = createContext<any | null>(null)
const { Provider } = FetchContext

const FetchProvider = ({ children }: FetchProviderProps) => {
  // const authContext = useContext(AuthContext)

  const fetchAxios = axios.create({
    baseURL: process.env.REACT_APP_API_URL
  });

  fetchAxios.interceptors.request.use(
    config => {
      // config.headers 
      return config
    },
    error => {
      return Promise.reject(error)
    }
  )

  return (
    <Provider
      value={{
        fetchAxios
      }}
    >
      {children}
    </Provider>
  );
}

export { FetchContext, FetchProvider };
