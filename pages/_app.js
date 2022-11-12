import React from "react";

import { Layout } from "../components";
import "../styles/globals.css";
import { Statecontext } from "../context/StateContext";
import { Toaster } from "react-hot-toast";

function MyApp({ Component, pageProps }) {
  return (
    <Statecontext>
      <Layout>
        <Toaster />
        <Component {...pageProps} />
      </Layout>
    </Statecontext>
  );
}

export default MyApp;
