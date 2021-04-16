import React, { useEffect } from "react";
import { Progress } from "../components";
import { AnimatePresence } from "framer-motion";
import "../styles/global.css";
import "../styles/frame.css";
import "../styles/eq.css";

function App({ Component, pageProps, router }) {
  const Template = Component.Template || EmptyTemplate;
  Progress();

  return (
    <Template>
      <AnimatePresence exitBeforeEnter>
        <Component {...pageProps} key={router.route} />
      </AnimatePresence>
    </Template>
  );
}

const EmptyTemplate = ({ children }) => <>{children}</>;

export default App;
