import React from 'react'
import Image from 'gatsby-image'
import styled from 'styled-components'

const PortfolioCard = ({ data }) => {
  return (
    <PortfolioCardWrapper>
      <a href={data.link}
        target='_blank'
        rel='noreferrer'
      >
        <div className='img-container'>
          <Image
            fluid={data.thumbnail.childImageSharp.fluid}
          />
        </div>
      </a>
      {/* EACH IMAGE FOOTER */}
      <div className='img-footer'>
        {/* PROJECT STACKS */}
        <div className='stacks-container'>
          {data.stacks.map((stack, i) => (
            <p className='stacks' key={i}>
              <span>{stack}</span>
            </p>
          ))}
        </div>

        {/* PROJECT TITLE & LINKS */}
        <div className='img-header'>
          <p className='project-name'>{data.name}</p>

          <div className='links'>
            <small>{data.desc}</small>
            <div>
              <a
                href={data.github}
                target='_blank'
                rel='noreferrer'
              >Github</a>
              <a
                href={data.link}
                target='_blank'
                rel='noreferrer'
              >Live</a>
            </div>
          </div>
        </div>
      </div>
    </PortfolioCardWrapper>
  )
}

const PortfolioCardWrapper = styled.div`
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
      display: flex;
      justify-content: space-between;
      align-items: center;
      font-size: 1rem;
      a {
        margin-left: 1rem;
        transition: all 0.2s;
      }
      a:hover {
        color: var(--accent-clr);
      }
      small {
        color: var(--grey-clr);
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

export default PortfolioCard