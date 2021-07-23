import Head from "next/head";
import GlobalStyle from "../styles/global";

import { AnimateSharedLayout } from "framer-motion";

import "./_app.css";

const App = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <title>Amor no Pote</title>
        <meta name="description" content="Mensagens no pote" />
        <link rel="icon" href="./favicon.ico" />
      </Head>
      <GlobalStyle />
      <AnimateSharedLayout>
        <Component {...pageProps} />
      </AnimateSharedLayout>
    </>
  );
};

export default App;
