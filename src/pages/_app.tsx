
import type { AppProps } from 'next/app'
import { StateProvider } from '../state/state'
import '../styles/global.scss'
import Navbar from '../components/navbar'

function MyApp({ Component, pageProps }: AppProps) {
  return <StateProvider>
    <Navbar />
    <Component {...pageProps} />
  </StateProvider>
}

export default MyApp
