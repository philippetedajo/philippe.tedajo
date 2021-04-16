import Document, { Html, Head, Main, NextScript } from "next/document";
import Link from "next/link";

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <title>Nextwind</title>
          <Link
            rel="preload"
            href="/fonts/d-din.regular.ttf"
            as="font"
            crossOrigin=""
          />
          <Link
            rel="preload"
            href="/fonts/d-din.bold.ttf"
            as="font"
            crossOrigin=""
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
