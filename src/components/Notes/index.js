import { Link } from 'gatsby'
import React from 'react'
import styled from 'styled-components'

const Notes = ({ notes }) => {
  return (
    <NotesWrapper className='p-1'>
      {notes.map((note, index) => {
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

export default Notes