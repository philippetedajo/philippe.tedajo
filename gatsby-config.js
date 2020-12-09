// init. environment variables
const dotenv = require("dotenv")
const { graphql } = require("gatsby")
dotenv.config()

const { githubApiQuery } = require("./github-api")

module.exports = {
  siteMetadata: {
    title: `Philippe Tedajo`,
    description: `Philippe Tedajo is a software engineer specializing in building websites and applications offering a memorable user experience.`,
    author: `Philippe Tedajo`,
    url: "https://www.philippetedajo.com/",
    image: "images/p.png",
    twitterUsername: "@Zambou21",
    keywords: [
      "Portofolio",
      "Gatsby",
      "Javascript",
      "React",
      "Github",
      "GRAPHQL",
    ],
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `fonts`,
        path: `${__dirname}/src/static/fonts/`,
      },
    },
    `gatsby-transformer-sharp`,
    {
      resolve: "gatsby-plugin-anchor-links",
      options: {
        offset: -100,
      },
    },
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/p.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-source-github-api`,
      options: {
        url: "https://api.github.com/graphql", // default Github GraphQL v4 API endpoint

        // token: required by the GitHub API
        token: process.env.GITHUB_PERSONAL_ACCESS_TOKEN,

        // GraphQLquery: defaults to a search query
        graphQLQuery: githubApiQuery,

        // variables: defaults to variables needed for a search query
        variables: {
          github_login: process.env.GITHUB_LOGIN,
        },
      },
    },
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /assets/,
        },
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
