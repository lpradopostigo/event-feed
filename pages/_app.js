import "antd/dist/antd.css";
import "/styles/globals.less";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Grass</title>
        <meta
          name="description"
          content="Check the weather of various locations in the earth"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
