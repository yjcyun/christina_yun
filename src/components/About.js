import React from 'react'
import styled from 'styled-components'

const About = () => {
  return (
    <AboutWrapper className='p-1'>
      <h1 className='page-title'>About Me</h1>
      {/* INTRO PARAGRAPHS */}
      <p className='text'>Hello, thank you for visiting my site. This is where I document all my struggles of becoming a self-taught frontend developer.</p>
      <p className='text'>My name is Christina, a furmom of two dogs and one bunny living in Toronto, Canada. I used to work as a Registered Veterinary Technician but upon a lot of internal struggles and debates with myself, I decided quit my job and start being serious about web development.</p>
      {/* LANGUAGES */}
      <div className='section'>
        <h3>
          <span role='img' aria-label='heart' className='emoji'>⚙️</span> Languages-Frameworks-Libraries
          </h3>
        <ul>
          <li>
            <span>Javascript</span> - there's a love-hate relationship since this is the very first language I learned(still learning). I struggled...and continue to struggle a lot.
            </li>
          <li>
            <span>React</span> - Who doesn't love React?
            </li>
          <li>
            <span>Gatsby</span> - I simply <span role='img' aria-label='heart' className='emoji'>❤️</span> Gatsby
            </li>
          <li>
            <span>Styled-components</span> - pass those props in!
            </li>
          <li>
            <span>HTML</span>
          </li>
          <li>
            <span>CSS</span>
          </li>
          <li>
            <span>Node/Express</span> - I learned the basics so I can build my frontend <span role='img' aria-label='wink' className='emoji'>😉</span>
          </li>
          <li>
            <span>MongoDB/Mongoose</span> - I would like to know more
            </li>
        </ul>
      </div>
      {/* TO LEARN */}
      <div className='section'>
        <h3><span role='img' aria-label='heart' className='emoji'>📒</span> Techs to Learn</h3>
        <ul>
          <li><span>Next.js</span></li>
          <li><span>mySQL</span></li>
          <li><span>Wordpress</span></li>
          <li><span>Shopify</span></li>
        </ul>
      </div>
      {/* HARDWARES I USE */}
      <div className='section'>
        <h3><span role='img' aria-label='computer' className='emoji'>💻</span> Hardware</h3>
        <p>My laptop and their friends:</p>
        <ul>
          <li><span>Microsoft Surface Pro 6 - Intel Core i5</span></li>
          <li><span>Acer 24" LCD Monitor</span> - donated by my brother</li>
          <li><span>Genius Hi-Fi Wood Speakers</span> - donated by my brother</li>
          <li><span>Microsoft Explorer Touch Mouse</span> - donated by my boyfriend</li>
        </ul>
      </div>
      {/* SOFTWARE PROGRAMS I USE */}
      <div className='section'>
        <h3><span role='img' aria-label='software' className='emoji'>👩‍💻</span> Software</h3>
        <p>Here are some some of the applications that I enjoy using:</p>
        <ul>
          <li><span>Visual Studio Code</span></li>
          <li><span>Google Chrome</span></li>
          <li><span>Microsoft Edge (occasionally)</span></li>
          <li><span>Hyper terminal</span></li>
          <li><span>Adobe XD</span></li>
          <li><span>Postman</span></li>
          <li><span>MongoDB Compass</span></li>
        </ul>
      </div>
      {/* WHERE DO I LEARN? */}
      <div className='section'>
        <h3><span role='img' aria-label='pencil' className='emoji'>✏️</span> Learning Platforms</h3>
        <ul>
          <li><a href='https://www.udemy.com/' target='_blank' rel='noreferrer'><span>Udemy</span></a> - My go-to learning platform</li>
          <li><a href='https://www.codecademy.com/catalog/language/html-css' target='_blank' rel='noreferrer'><span>Codecademy</span></a> - Learned basic HTML & CSS</li>
          <li><a href='https://www.frontendmentor.io/challenges' target='_blank' rel='noreferrer'><span>Frontend Mentor</span></a> - HTML,CSS, JS challenges</li>
          <li><a href='https://academind.com' target='_blank' rel='noreferrer'><span>Academind</span></a></li>
          <li>
            <>Youtube</>
            <ol className='yt-links'>
              <li><a href='https://www.youtube.com/channel/UC29ju8bIPH5as8OGnQzwJyA' target='_blank' rel='noreferrer'><span>Traversy Media</span></a> - beginner friendly code-along tutorials</li>
              <li><a href='https://www.youtube.com/channel/UCW5YeuERMmlnqo4oq8vwUpg' target='_blank' rel='noreferrer'><span>The Net Ninja</span></a> - high quality tutorials</li>
            </ol>
          </li>
        </ul>
      </div>
    </AboutWrapper>
  )
}

const AboutWrapper = styled.section`
  .section {
    margin: 3rem 0;
    h3 {
      margin-bottom: 1rem;
      font-family: var(--secondary-ff);
    }
    li{
      margin: 5px 0;
      span {
        box-shadow: rgba(42, 192, 110, 1) 0px -2px inset;
      }
      .emoji {
        box-shadow: none;
      }
    }
    .yt-links {
      margin-left: 2rem;
      li {
        list-style: square;
      }
    }
  }
`

export default About
