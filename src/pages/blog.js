import React from "react";
import { Link, graphql } from "gatsby";
import SEO from "../components/seo";
import Button from "../components/button";
import SearchPosts from "../components/searchPosts";
import "../styles/blog.css";

class Blog extends React.Component {
  render() {
    const { data, navigate, location } = this.props;
    const siteTitle = data.site.siteMetadata.title;
    const posts = data.allMdx.edges;
    const localSearchBlog = data.localSearchBlog;

    return (
      <div className="container mt-5 pt-5" title={siteTitle}>
        <SEO title="All posts" />
        <h1 className="title-blog">Welcome to my blog</h1>
        <SearchPosts
          posts={posts}
          localSearchBlog={localSearchBlog}
          navigate={navigate}
          location={location}
        />
        <Link to="/">
          <Button marginTop="85px">Go Home</Button>
        </Link>
      </div>
    );
  }
}

export default Blog;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    localSearchBlog {
      index
      store
    }
    allMdx(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
          }
        }
      }
    }
  }
`;
