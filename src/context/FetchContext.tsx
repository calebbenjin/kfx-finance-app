import  React, { createContext, useContext, useEffect, useState } from "react";
import axios from 'axios'


interface FetchProviderProps {
  children: React.ReactNode;
}


const FetchContext = createContext<any | null>(null)
const { Provider } = FetchContext

const FetchProvider = ({ children }: FetchProviderProps) => {
  const fetchContext = useContext(FetchContext)

  const authAxios = axios.create({
    baseURL: process.env.REACT_APP_API_URL
  });

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
