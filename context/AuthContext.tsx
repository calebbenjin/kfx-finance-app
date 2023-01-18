import { createContext, useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import { publicFetch } from '@/config/fetch';
import axios from 'axios';

const AuthContext = createContext<any | null>(null)
const { Provider } = AuthContext;

type AuthProps = {
  children: React.ReactNode | React.ReactElement
}


const AuthProvider = ({children}: AuthProps) => {
  const route = useRouter()
  const [authState, setAuthState] = useState<any>({})

  const userID = typeof window !== 'undefined' && localStorage.getItem('userID')

  useEffect(() => {
    const getAuthData = async () => {
      try {
        const { data } = await publicFetch.get(`${userID}`);
        setAuthState(data?.data?.user);
      } catch (err) {
        console.log(err);
      }
    };

    getAuthData();
  }, [userID]);

  const isAdmin = () => {
    return authState.role === 'admin'
  }

  const logout = async () => {
    try {
      const data = await axios.post(`${process.env.NEXT_APP_API_URL}/logout`)
      route.push('/login')
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <Provider value={{
      authState, 
      setAuthState,
      logout,
      isAdmin}}>
      {children}
    </Provider>
  )
}

export { AuthContext, AuthProvider }
