import { Html, Head, Main, NextScript } from "next/document";

// https://nextjs.org/docs/advanced-features/custom-document
export default function Document(): JSX.Element {
  return (
    <Html lang="en">
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
