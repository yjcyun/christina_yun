import React from 'react'
import styled from 'styled-components'

const About = () => {
  return (
    <AboutWrapper className='p-1'>
      <h1 className='page-title'>About Me</h1>
      {/* INTRO PARAGRAPHS */}
      <p className='text'>Hello, thank you for visiting my site. This is where I share my journey of becoming a frontend developer.</p>
      <div className='section'>
        <h2>
          <span role='img' aria-label='woman' className='emoji'>👩‍💻</span> Who am I?
        </h2>
        <p className='text'>My name is Christina Yun, and I am a Frontend Developer based in Toronto🍁. I have a BSc in Biological Science and a Diploma in Veterinary Technology. I spend most of day studying Javascript, playing with React, learning new tools, and drinking tea☕.</p>
      </div>
      <div className='section'>
        <h2>
          <span role='img' aria-label='fire' className='emoji'>🔥</span> What am I passionate about?
        </h2>
        <p className='text'>I am amazed by how fast frontend technologies have evolved in the past year. I have witnessed an outpouring of new updates, tutorials, and articles on the internet. In keeping up with the latest industry standards, I have found that being a frontend developer is a never-ending learning journey. It feels incredibly good to learn something new each day.</p>
        <p className='text'>I am passionate about bridging the gap between the design & engineering when creating world-class products that have lasting impact. I also enjoy being surrounded by people who are just as eager to learn from me, as I am from them.</p>
      </div>
      {/* LANGUAGES */}
      <div className='section'>
        <h2>
          <span role='img' aria-label='heart' className='emoji'>⚙️</span> What's in my toolbox?
          </h2>
        <ul>
          <li>
            <span>Javascript</span>
          </li>
          <li>
            <span>React</span>
          </li>
          <li>
            <span>Gatsby</span>
          </li>
          <li>
            <span>Styled-components</span>
          </li>
          <li>
            <span>HTML/CSS</span>
          </li>
          <li>
            <span>Node/Express</span>
          </li>
          <li>
            <span>MongoDB/Mongoose</span>
          </li>
          <li>
            <span>mySQL</span>
          </li>
          <li>
            <span>Typescript & Jest, Enzyme</span> - coming soon!
            </li>
        </ul>
      </div>

      <div className='section'>
        <h2>
          <span role='img' aria-label='heart' className='emoji'>💗</span> Anything else?
          </h2>
        <p className='text'>I am a dog person and I like Bahn mi.</p>
      </div>

    </AboutWrapper>
  )
}

const AboutWrapper = styled.section`
  .section {
    margin: 3rem 0;
    h2 {
      margin-bottom: 1rem;
      font-family: var(--primary-ff);
    }
    li{
      margin: 5px 0;
      font-size:1.2rem;
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
