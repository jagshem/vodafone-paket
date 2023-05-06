import Navbar from './components/Navbar'
import Footer from './components/Footer'

import Head from 'next/head'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link
          rel="icon"
          type="image/x-icon"
          href="https://upload.wikimedia.org/wikipedia/commons/a/a6/Vodafone_icon.svg"
        />
        <title>Vodafone Kolay Paket Yükle</title>
      </Head>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </>
  )
}

export default MyApp
