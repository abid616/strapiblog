import 'tailwindcss/tailwind.css'
import Head from "next/head";
import App from "next/app";
import {getStrapiMedia} from "../lib/media";
import {fetchAPI} from "../lib/api"
import { createContext } from "react";

export const GlobalContext = createContext({}); 


function MyApp({ Component, pageProps }) {
  const { global } = pageProps;
  return (
    <>
      <Head>
        <link rel="shortcut icon" href={getStrapiMedia(global.favicon)} />
      </Head>
      <GlobalContext.Provider value={global}>
        <Component {...pageProps} />
      </GlobalContext.Provider>
    </>
  );
}

MyApp.getInitialProps = async (ctx) => {
  const appProps = await App.getInitialProps(ctx);
  const global = await fetchAPI("/global");
  return { ...appProps, pageProps: { global } };
};

export default MyApp;
