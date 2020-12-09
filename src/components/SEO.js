import { Helmet } from "react-helmet"
import { StaticQuery, graphql } from "gatsby"

import React from "react"

const SEO = ({ title, description, author, url, image, twitterUsername }) => {
  return (
    <StaticQuery
      query={detailsQuery}
      render={data => {
        const metaDescription =
          description || data.site.siteMetadata.description
      }}
    />
  )
}

const detailsQuery = graphql`
  query DefaultSEOQuery {
    site {
      siteMetadata {
        title
        description
        author
        url
        image
        twitterUsername
      }
    }
  }
`

export default SEO
