import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import { details } from './portfolio-constants'
import styled from 'styled-components'
import Image from 'gatsby-image'

const query = graphql`
  {
    portfolio:allFile(filter: {extension: {regex: "/(png)/"}, relativeDirectory: {eq: "portfolio"}},sort: {fields: name, order: DESC}) {
      nodes {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  }
`

const Portfolio = () => {
  const { portfolio: { nodes } } = useStaticQuery(query);
  return (
    <section className='p-1'>
      <h1 className='page-title'>Portfolio</h1>
      <PortfolioGrid className='text'>
        {/* ITERATE IMAGE FOLDER */}
        {nodes.map((node, index) => (
          <div className='grid-container' key={index}>
            <a href={details[index].link}
              target='_blank'
              rel='noreferrer'
            >
              <div className='img-container'>
                <Image
                  fluid={node.childImageSharp.fluid}
                />
              </div>
            </a>
            {/* EACH IMAGE FOOTER */}
            <div className='img-footer'>
              {/* PROJECT STACKS */}
              <div className='stacks-container'>
                {details[index].stacks.map((el, i) => (
                  <p className='stacks' key={i}>
                    <span>{el}</span>
                  </p>
                ))}
              </div>

              {/* PROJECT TITLE & LINKS */}
              <div className='img-header'>
                <p className='project-name'>{details[index].name}</p>
                <div className='links'>
                  <a
                    href={details[index].github}
                    target='_blank'
                    rel='noreferrer'
                  >
                    Github
                  </a>
                  <a
                    href={details[index].link}
                    target='_blank'
                    rel='noreferrer'
                  >
                    Live
                  </a>
                </div>
              </div>

            </div>
          </div>
        ))}
      </PortfolioGrid>
    </section>
  )
}

const PortfolioGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px,1fr));
  grid-column-gap: 2rem;

  .grid-container {
    margin-bottom: 3rem;
    border-radius: 5px;
    box-shadow:0 0.5rem 1.5rem 0 rgba(0, 0, 0, 0.1);
  }

  .img-container {
    transition: all 0.3s;
  }
  .img-container:hover {
    transform: scale(0.95);
  }

  .img-footer {
    padding: 2rem 1.5rem 1.5rem;
  }

  .img-header {
    .project-name {
      margin: 1.5rem 0 1rem;
      font-weight: bold;
      font-size: 1.1rem;
    }
    .links {
      text-align: right;
      font-size: 1rem;
      a {
        margin-left: 1rem;
        transition: all 0.2s;
      }
      a:hover {
        color: var(--accent-clr);
      }
    }
  }
  .stacks-container {
    line-height: 0.9;
  }
  .stacks {
    font-size: 0.8rem;
    display: inline-block;
    span {
      font-weight: 600;
      margin-right: 0.5rem;
      color: var(--grey-clr);
    }
  }
  .icon {
    vertical-align: middle;
    font-size: 1.1rem;
    padding-bottom: 3px;
    color: var(--accent-clr);
  }
`

export default Portfolio