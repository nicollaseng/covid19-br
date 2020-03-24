import React from "react";
import Head from "next/head";

import { Container, Creator, Info, Footer } from "./styles";

const Layout = ({ children }) => {
  return (
    <Container>
      <Head>
        <title>COVID-19 BR</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {children}
      <Footer>
        <Creator>Powered with ❤️ by <a href="https://twitter.com/remoterpro">Remoter PRO</a></Creator>
        <Info>*Números atualizados diariamente</Info>
        <Info>**Fonte da informação: CSSEGISandData
/ COVID-19</Info>
      </Footer>
      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }
        * {
          box-sizing: border-box;
        }
      `}</style>
    </Container>
  );
}

export default Layout;
