import React from 'react'

const Contact = () => {
  return (
    <section className='p-1'>
      <h1 className='page-title'>Contact Me</h1>
      <p className='text'>If you have any questions or just want to say hi, drop me a message and we'll talk! I welcome critiques, comments, or suggestions you might have about my portfolio.</p>
      <ul>
        <li>
          <a
            href='mailto:christina5707@gmail.com'
            target='_blank'
            rel='noreferrer'
          >
            <span role='img' aria-label='email' className='emoji'>📧</span>christina5707@gmail.com
          </a>
        </li>
      </ul>
    </section>
  )
}

export default Contact