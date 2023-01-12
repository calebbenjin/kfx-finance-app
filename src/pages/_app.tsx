import { AuthProvider } from '@/context/AuthContext';
import '../styles/globals.css'
import "animate.css/animate.min.css";
import type { AppProps } from 'next/app'
import { FetchProvider } from '@/context/FetchContext';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <AuthProvider>
      <FetchProvider>
        <Component {...pageProps} />
      </FetchProvider>
    </AuthProvider>
  )
}
