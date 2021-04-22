import Head from "next/head";

const tags = {
  title: "PhilippeTedajo",
  description:
    "Software engineer | Passionate Learner | Typescript | React | Node. Working as a professional Front-end developer",
  url: "https://philippetedajo.vercel.app",
};

const SeoTags = () => {
  return (
    <Head>
      <title>{tags.title}</title>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta charSet="utf-8" />

      {/*General*/}
      <link rel="icon" href="/favicon.ico" />
      <meta name="description" content={tags.description} />
      <meta name="author" content="Philippe Tedajo" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary" key="twcard" />
      <meta name="twitter:creator" content="Philippe Tedajo" key="twhandle" />

      {/* Open Graph */}
      <meta property="og:url" content={tags.url} key="ogurl" />
      <meta property="og:image" content="/cover.png" key="ogimage" />
      <meta property="og:site_name" content={tags.title} key="ogsitename" />
      <meta property="og:title" content={tags.title} key="ogtitle" />
      <meta property="og:description" content={tags.description} key="ogdesc" />
    </Head>
  );
};

export default SeoTags;
