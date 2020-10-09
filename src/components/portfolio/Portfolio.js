import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import { details } from './portfolio-constants'
import { FaGithub } from 'react-icons/fa'
import { FiExternalLink } from 'react-icons/fi'
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

const stackColor = stack => {
  switch (stack) {
    case 'HTML':
      return <span style={{ color: '#22a6b3' }}>{stack}</span>;
    case 'CSS':
      return <span style={{ color: 'rgb(62, 84, 163)' }}>{stack}</span>;
    case 'JS':
      return <span style={{ color: '#fdcb6e' }}>{stack}</span>;
    case 'React':
      return <span style={{ color: '#30336b' }}>{stack}</span>;
    case 'Styled-Components':
      return <span style={{ color: '#f0932b' }}>{stack}</span>;
    case 'Gatsby':
      return <span style={{ color: '#4834d4' }}>{stack}</span>;
    case 'Node':
      return <span style={{ color: '#27ae60' }}>{stack}</span>;
    case 'Express':
      return <span style={{ color: '#16a085' }}>{stack}</span>;
    case 'MongoDB':
      return <span style={{ color: '#8e44ad' }}>{stack}</span>;
    default:
      return <span style={{ color: '#fdcb6e' }}>JS</span>
  }
}

const Portfolio = () => {
  const { portfolio: { nodes } } = useStaticQuery(query);
  return (
    <>
      <h1 className='page-title' style={{ padding: '1.5rem 0' }}>Portfolio</h1>
      <PortfolioWrapper>
        {/* ITERATE IMAGE FOLDER */}
        {nodes.map((node, index) => (
          <div className='grid-container' key={index}>
            <div className='img-container'>
              <Image
                fluid={node.childImageSharp.fluid}
              />
            </div>
            {/* EACH IMAGE FOOTER */}
            <div className='img-footer'>
              {/* PROJECT STACKS */}
              <div className='stacks-container'>
                {details[index].stacks.map((el, i) => (
                  <p className='stacks' key={i}>
                    {stackColor(el)}
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
      </PortfolioWrapper>
    </>
  )
}

const PortfolioWrapper = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px,1fr));
  padding: 1rem;
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
    }
  }
  .icon {
    vertical-align: middle;
    font-size: 1.1rem;
    padding-bottom: 3px;
    color: var(--accent-clr);
  }
  @media (min-width: 768px) {
    padding: 0;
    padding-top: 1.5rem;

  }
`

export default Portfolio