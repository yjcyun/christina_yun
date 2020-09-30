import React from 'react'
import { graphql } from 'gatsby'
import { MDXRenderer } from "gatsby-plugin-mdx"
import Layout from '../components/Layout'
import styled from 'styled-components';
import SEO from '../components/SEO';

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

const NoteTemplate = ({ data }) => {
  const { note: { frontmatter: { title, category, date }, body } } = data

  return (
    <Layout>
      <SEO title={title} />
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
  width: 100vw;
  max-width: var(--max-width);
  h2 {
    margin-bottom: 0.8rem;
    font-size: 2rem;
    line-height: 1;
  }
  .category {
    color: var(--accent-clr);
  }
  .body {
    margin-top: 2rem;
  }
  @media (min-width:768px) {
    width: inherit;
    h2{
      font-size: 3rem;
    }
  }
`

export default NoteTemplate
