// import React from 'react'
// import { graphql, Link } from 'gatsby'
// import { IoMdArrowBack, IoMdArrowForward } from 'react-icons/io'
// import styled from 'styled-components';
// import Layout from '../components/layout/Layout';
// import SEO from '../components/SEO';

// export const query = graphql`
//   query notesList($skip: Int!, $limit: Int!) {
//     notes: allMdx(sort: {fields: frontmatter___date, order: DESC}, skip:$skip, limit:$limit) {
//       nodes {
//         excerpt
//         frontmatter {
//           category
//           date(formatString: "MMM Do, YYYY")
//           slug
//           title
//         }
//         id
//       }
//     }
//   }
// `

// const NoteListTemplate = ({ data, pageContext }) => {
//   const { currentPage, numOfPages } = pageContext;
//   const isFirst = currentPage === 1;
//   const isLast = currentPage === numOfPages;

//   const prevPage = currentPage - 1 === 1 ? `/notes` : `/notes/${currentPage - 1}`;
//   const nextPage = `/notes/${currentPage + 1}`;

//   const { notes: { nodes } } = data;

//   return (
//     <Layout>
//       <SEO  title='Notes'/>
//       <NotesWrapper className='p-1'>
//       <h1 className='page-title' style={{marginBottom:'1.5rem'}}>Notes</h1>
//         {nodes.map((note, index) => {
//           const { title, date, slug, category } = note.frontmatter;
//           return (
//             <div className='note-li' key={index}>
//               <Link to={`/notes/${slug}`} >
//                 <h2>{title}</h2>
//               </Link>
//               <span className='small'>{date}</span> | <span className='category small'>{category}</span>
//               <p>{note.excerpt}</p>
//             </div>
//           )
//         })}
//       </NotesWrapper>

//       <Pagination className='p-1'>
//         {/* PREV BUTTON */}
//         <Link to={prevPage} className={!isFirst ? 'active navpages' : 'muted navpages'}>
//           <span className='icon'><IoMdArrowBack /></span>
//           <span>Prev</span>
//         </Link>
//         {/* PAGES NUMBERS */}
//         <div className='page-numbers'>
//           {Array.from({ length: numOfPages }, (_, index) => {
//             return (
//               <Link
//                 key={index}
//                 to={`/notes/${index === 0 ? '' : index + 1}`}
//                 className={index + 1 === currentPage ? 'active' : 'muted'}
//               >
//                 {index + 1}
//               </Link>
//             )
//           })}
//         </div>
//         {/* NEXT BUTTON */}
//         <Link to={nextPage} className={!isLast ? 'active navpages' : 'muted navpages'}>
//           <span>Next</span>
//           <span className='icon'><IoMdArrowForward /></span>
//         </Link>
//       </Pagination>
//     </Layout>
//   )
// }

// const NotesWrapper = styled.div`
//   min-height: 76vh;
//   .note-li {
//     margin-bottom: 2rem;
//     h2 {
//       margin-bottom: 8px;
//     }
//     h2:hover {
//       text-decoration: underline;
//     }
//     p{
//       margin-top: 8px
//     }
//   }
// `

// const Pagination = styled.div`
//   display: flex;
//   align-items: center;
//   justify-content: space-between;
//   .navpages {
//     font-size: 1.5rem;
//     text-transform: uppercase;
//     font-weight: 600;
//   }
//   .navpages.muted{
//     pointer-events: none;
//   }
//   .icon {
//     vertical-align: middle;
//   }
//   .muted {
//     color: var(--grey-clr);
//   }
//   .active {
//     color: var(--accent-clr);
//   }
//   .page-numbers{
//     a{
//       margin: 0 0.5rem;
//     }
//     .active {
//       font-weight: 600;
//     }
//   }
// `

// export default NoteListTemplate
