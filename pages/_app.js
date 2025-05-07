import '../styles/globals.css';
import Head from 'next/head';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Mural de Regras</title>
        <meta name="description" content="Constituição do Mural de Regras estabelecida por Vinicius Deiró Lopes" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp; 