import React from 'react'
import { graphql } from 'gatsby'

const PostListTemplate = () => {
  const { notes } = useStaticQuery(query);
  console.log(notes)
  return (
    <div>

    </div>
  )
}

const query = graphql`
  query notesList($skip: Int!, $limit: Int!) {
    notes: allMdx(sort: {fields: frontmatter___date, order: DESC}, skip:$skip, limit:$limit) {
      nodes {
        excerpt
        frontmatter {
          category
          date(formatString: "MMM Do, YYYY")
          slug
          title
        }
        id
      }
    }
  }
`

export default PostListTemplate
