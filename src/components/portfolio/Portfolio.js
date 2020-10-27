import React from 'react'
import styled from 'styled-components'
import { graphql, useStaticQuery } from 'gatsby'
import PortfolioCard from './PortfolioCard'
import { useState } from 'react'

export const query = graphql`
  {
    allProjectsJson {
      nodes {
        featured
        github
        id
        link
        name
        desc
        stacks
        thumbnail {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`

const Portfolio = () => {
  const [cardsToShow, setCardsToShow] = useState(6);

  // handle 'load more' button
  const handleShowMoreCards = () => {
    setCardsToShow(prevVisiblePost => prevVisiblePost + 6);
  }

  const { allProjectsJson: { nodes } } = useStaticQuery(query);

  return (
    <PortfolioWrapper className='p-1'>
      <h1 className='page-title'>Portfolio</h1>
      <h2>Freelance Work</h2>
      <PortfolioGrid className='text'>
        {nodes
          .filter(el => el.featured)
          .map((el, index) => (
            <div className='grid-container' key={index}>
              <PortfolioCard data={el} />
            </div>
          ))}
      </PortfolioGrid>
      <h2>Personal Projects</h2>
      <PortfolioGrid className='text'>
        {nodes
          .filter(el => el.featured === false)
          .slice(0, cardsToShow)
          .map((el, index) => (
            <div className='grid-container' key={index}>
              <PortfolioCard data={el} />
            </div>
          ))}
      </PortfolioGrid>
      <div className='btn-container'>
        <button onClick={handleShowMoreCards}>Load More</button>
      </div>
    </PortfolioWrapper>
  )
}

const PortfolioWrapper = styled.section`
  h2 {
    margin-top: 2rem;
  }
  .btn-container {
    text-align: center;
  }
`

const PortfolioGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px,1fr));
  grid-column-gap: 2rem;

  .grid-container {
    margin-bottom: 3rem;
    border-radius: 5px;
    box-shadow:0 0.5rem 1.5rem 0 rgba(0, 0, 0, 0.1);
  }
`

export default Portfolio