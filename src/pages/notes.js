import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import Layout from '../components/Layout'
import Notes from '../components/Notes'

const query = graphql`
  {
    notes: allMdx(sort: {fields: frontmatter___date, order: DESC}) {
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

const NotesPage = () => {
  const { notes:{nodes} } = useStaticQuery(query);
  return (
    <Layout>
      <Notes notes={nodes}/>
    </Layout>
  )
}



export default NotesPage