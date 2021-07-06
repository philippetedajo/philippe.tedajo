import React from "react";
import { ThemeProvider } from "next-themes";
import { Progress } from "../components";
import { AnimatePresence } from "framer-motion";
import "../styles/global.css";
import "../styles/frame.css";

function App({ Component, pageProps, router }) {
  const Template = Component.Template || EmptyTemplate;
  Progress();

  return (
    <ThemeProvider>
      <Template>
        <AnimatePresence exitBeforeEnter>
          <Component {...pageProps} key={router.route} />
        </AnimatePresence>
      </Template>
    </ThemeProvider>
  );
}

const EmptyTemplate = ({ children }) => <>{children}</>;

export default App;
