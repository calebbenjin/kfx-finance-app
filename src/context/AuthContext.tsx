import { createContext, useState } from 'react'
import { useRouter } from 'next/router'

const AuthContext = createContext<any | null>(null)
const { Provider } = AuthContext;

type AuthProps = {
  children: React.ReactNode | React.ReactElement
}

type AuthInfoProps = {
  token: string,
  expiresAt: any | null,
  userInfo: {
      username: string,
      role: string
    } | {}
  
}

const AuthProvider = ({children}: AuthProps) => {
  const route = useRouter()

  const [authState, setAuthState] = useState<any>({
    token: "97283782fd8hdn93",
    expiresAt: 23/4/2023,
    userInfo: {
      username: "JohnDeo",
      role: "admin"
    },
  })


  const setAuthInfo = ({ token, expiresAt, userInfo}: AuthInfoProps) => {
    setAuthState({
      token,
      expiresAt,
      userInfo
    })
  }


  const isAuthenticated = () => {
    if(!authState.token || !authState.expiresAt) {
      return false
    }
    return Date.now() / 1000 < authState.expiresAt
  }

  const isAdmin = () => {
    return authState.userInfo.role === 'admin'
  }

  const logout = () => {

    setAuthState({
      token: null,
      expiresAt: null,
      userInfo: {}
    })

    route.push('/login')
  }

  return (
    <Provider value={{
      authState, setAuthState: (authInfo: any) => setAuthInfo(authInfo),
      isAuthenticated, 
      logout,
      isAdmin}}>
      {children}
    </Provider>
  )
}

export { AuthContext, AuthProvider }
