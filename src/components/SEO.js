import { Helmet } from "react-helmet"
import { StaticQuery, graphql } from "gatsby"

import React from "react"

const SEO = ({
  title,
  description,
  author,
  url,
  image,
  twitterUsername,
  keywords,
}) => {
  console.log(title)
  return (
    <StaticQuery
      query={detailsQuery}
      render={data => {
        console.log(data)
        const metaTitle = title || data.site.siteMetadata.title
        const metaDescription =
          description || data.site.siteMetadata.description
        const metaAuthor = author || data.site.siteMetadata.author
        const metaUrl = url || data.site.siteMetadata.url
        const metaImage = image || data.site.siteMetadata.image
        const metaTwitterUsername =
          twitterUsername || data.site.siteMetadata.twitterUsername
        const metaKeywords = keywords || ["Gatsby", "Portofolio"]

        return (
          <Helmet
            title={metaTitle}
            meta={[
              {
                name: `description`,
                content: description,
              },
              {
                name: `twitter:username`,
                content: twitterUsername,
              },
              {
                property: `og:title`,
                content: metaTitle,
              },
              {
                property: `og:title`,
                content: metaTitle,
              },
              {
                property: `og:description`,
                content: metaDescription,
              },
              {
                property: `og:url`,
                content: metaUrl,
              },
            ].concat(
              metaKeywords && metaKeywords > 0
                ? {
                    name: "keywords",
                    content: metaKeywords.join(`, `),
                  }
                : []
            )}
          />
        )
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
