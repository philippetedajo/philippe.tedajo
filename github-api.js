exports.githubApiQuery = `{
  viewer {
    login
    name
    repositories(first: 10) {
      nodes {
        id
        name
        description
        url
        updatedAt
        forkCount
        openGraphImageUrl
        stargazers {
          totalCount
        }
        
        licenseInfo {
          id
        }
        primaryLanguage {
          name
        }
        languages(first: 10) {
          nodes {
            name
          }
        }
      }
    }
  }
}`
