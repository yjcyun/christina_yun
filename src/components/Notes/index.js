import { Link } from 'gatsby'
import React from 'react'
import styled from 'styled-components'

const Notes = ({ notes }) => {
  return (
    <NotesWrapper>
      {notes.map((note, index) => {
        const { title, date, slug, category } = note.frontmatter;
        return (
          <div className='note-li' key={index}>
            <Link to={`/notes/${slug}`} >
              <h2>{title}</h2>
              <span>{date}</span> | <span className='category'>{category}</span>
              <p>{note.excerpt}</p>
            </Link>
          </div>
        )
      })}
    </NotesWrapper>
  )
}

const NotesWrapper = styled.div`
  padding: 1.5rem;
  .note-li {
    margin-bottom: 2rem;
    h2 {
      margin-bottom: 8px;
    }
    span {
      font-size: 0.9rem;
    }
    .category {
      color: var(--accent-clr);
      text-transform: uppercase;
      font-weight: 600;
    }
    p{
      margin-top: 8px
    }
  }
`

export default Notes