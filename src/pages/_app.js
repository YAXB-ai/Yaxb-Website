import React from "react";
import "styles/global.scss";
import "styles/components/index.scss";
import "util/analytics";
import Chat from "components/Chat";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Chat />

      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
