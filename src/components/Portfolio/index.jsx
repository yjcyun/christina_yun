import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import { details } from './details'
import { BsDot } from 'react-icons/bs'
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

const Portfolio = () => {
  const { portfolio: { nodes } } = useStaticQuery(query);
  return (
    <PortfolioWrapper>
      {nodes.map((node, index) => (
        <div className='grid-container' key={index}>
          <a href={details[index].link} target='_blank' rel="noreferrer" className='img-container'>
            <Image
              fluid={node.childImageSharp.fluid}
              imgStyle={{ objectFit: 'contain' }}
              style={{ maxHeight: '13rem' }}
            />
          </a>
          <div className='project-det'>
            <div className='name-github'>
              <h3 className='project-name'>{details[index].name}</h3>
              <div className='links'>
                <a href={details[index].github} target='_blank' rel="noreferrer">
                  <FaGithub />
                </a>
                <a href={details[index].link} target='_blank' rel="noreferrer">
                  <FiExternalLink />
                </a>
              </div>
            </div>
            <div className='stacks-container'>
              {details[index].stacks.map((el, i) => (
                <p className='stacks' key={i}>
                  <span>{el}</span>
                  {i === details[index].stacks.length - 1
                    ? <span></span>
                    : <BsDot className='icon' />
                  }
                </p>
              ))}
            </div>
          </div>
        </div>
      ))}
    </PortfolioWrapper>
  )
}

const PortfolioWrapper = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px,1fr));
  grid-gap: 2.5rem;
  padding: 1rem;
  .grid-container {
    margin-bottom: 2rem;
  }
  .project-det {
    max-width: 22rem;
    margin: 0 auto;
  }
  .name-github {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0.8rem 0 0.3rem;
    .links {
      font-size: 1.2rem;
      margin-top: 3px;
      a {
        margin-left: 0.5rem;
      }
    }
  }
  .stacks-container {
    line-height: 0.5;
  }
  .stacks {
    font-size: 0.8rem;
    display: inline-block;
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