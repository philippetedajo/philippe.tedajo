exports.githubApiQuery = `{
  viewer {
    login
    anyPinnableItems(type: REPOSITORY)
    bio
    name
    pinnedItems(first: 6) {
      totalCount
      nodes {
        ... on Repository {
          id
          name
          forkCount
          languages(first: 4) {
            nodes {
              name
            }
          }
          stargazerCount
          description
        }
      }
    }
  }
}
`
