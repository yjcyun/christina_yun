import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import { MDXRenderer } from "gatsby-plugin-mdx"
import Layout from '../components/Layout'
import styled from 'styled-components';

export const query = graphql`
  query SingleNote($slug: String) {
    note: mdx(frontmatter: { slug: { eq: $slug } }) {
      frontmatter {
        category
        date(formatString: "MMM Do, YYYY")
        slug
        title
        image {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
      body
    }
  }
`

const NoteTemplate = ({data}) => {
  const { note: { frontmatter: { title, category, date }, body } } = data

  return (
    <Layout>
      <NoteTemplateWrapper className='p-1'>
        <h2>{title}</h2>
        <span className='small'>{date}</span> | <span className='category small'>{category}</span>
        <div className='body'>
          <MDXRenderer>
            {body}
          </MDXRenderer>
        </div>
      </NoteTemplateWrapper>
    </Layout>
  )
}

const NoteTemplateWrapper = styled.article`
  h2 {
    margin-bottom: 0.8rem;
    font-size: 3rem;
    line-height: 1;
  }
  .category {
    color: var(--accent-clr);
  }
  .body {
    margin-top: 2rem;
  }
`

export default NoteTemplate
