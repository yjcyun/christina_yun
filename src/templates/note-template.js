// import React from 'react'
// import { graphql } from 'gatsby'
// import { MDXRenderer } from "gatsby-plugin-mdx"
// import styled from 'styled-components';
// import SEO from '../components/SEO';
// import Layout from '../components/layout/Layout';

// export const query = graphql`
//   query SingleNote($slug: String) {
//     note: mdx(frontmatter: { slug: { eq: $slug } }) {
//       frontmatter {
//         category
//         date(formatString: "MMM Do, YYYY")
//         slug
//         title
//       }
//       body
//     }
//   }
// `

// const NoteTemplate = ({ data }) => {
//   const { note: { frontmatter: { title, category, date }, body } } = data;

//   return (
//     <Layout>
//       <SEO title={title} />
//       <NoteTemplateWrapper className='p-1'>
//         <h2>{title}</h2>
//         <span className='small'>{date}</span> | <span className='category small'>{category}</span>
//         <div className='body'>
//           <MDXRenderer>
//             {body}
//           </MDXRenderer>
//         </div>
//       </NoteTemplateWrapper>
//     </Layout>
//   )
// }

// const NoteTemplateWrapper = styled.article`
//   width: 100vw;
//   max-width: var(--max-width);
//   margin-bottom:5rem;
//   h2 {
//     margin-bottom: 0.8rem;
//     font-size: 2rem;
//     line-height: 1;
//   }
//   h3 {
//     font-size: 1.6rem;
//     padding-top: 2rem;
//     font-family: var(--secondary-ff);
//   }
//   .category {
//     color: var(--accent-clr);
//   }
//   .body {
//     margin-top: 2rem;
//   }
//   ul {
//     margin-left: 2rem;
//   }
//   li {
//     list-style: square;
//     margin: 0.5rem 0;
//   }
//   a{
//     color: var(--clr-grey-5);
//     box-shadow: rgba(42, 192, 110, 1) 0px -2px inset;
//   }
//   @media (min-width:768px) {
//     width: inherit;
//     h2{
//       font-size: 3rem;
//     }
//   }
// `

// export default NoteTemplate
