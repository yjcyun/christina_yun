import React from 'react'
import { graphql, Link } from 'gatsby'
import styled from 'styled-components';
import Layout from '../components/Layout'

export const query = graphql`
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

const NoteListTemplate = ({ data, pageContext }) => {
  const { currentPage, numPages } = pageContext;
  const isFirst = currentPage === 1;
  const isLast = currentPage === numPages;

  const prevPage = currentPage - 1 === 1 ? `/notes` : `/notes/${currentPage - 1}`;
  const nextPage = `/blogs/${currentPage + 1}`;

  const { notes: { nodes } } = data;
  return (
    <Layout>
      <NotesWrapper className='p-1'>
        {nodes.map((note, index) => {
          const { title, date, slug, category } = note.frontmatter;
          return (
            <div className='note-li' key={index}>
              <Link to={`/notes/${slug}`} >
                <h2>{title}</h2>
              </Link>
              <span className='small'>{date}</span> | <span className='category small'>{category}</span>
              <p>{note.excerpt}</p>
            </div>
          )
        })}
      </NotesWrapper>
    </Layout>
  )
}



const NotesWrapper = styled.div`
  .note-li {
    margin-bottom: 2rem;
    h2 {
      margin-bottom: 8px;
    }
    h2:hover {
      text-decoration: underline;
    }
   
    p{
      margin-top: 8px
    }
  }
`

export default NoteListTemplate
