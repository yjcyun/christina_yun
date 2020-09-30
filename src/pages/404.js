import React from 'react'
import Layout from '../components/layout/Layout'

const ErrorPage = () => {
  return (
    <Layout>
      <div className='p-1'>
        <h1 className='page-title'>404: Not Found</h1>
        <p>You just hit a route that doesn't exist... the sadness<span role='img' aria-label='cry' style={{fontSize:'1.5rem'}}>😭</span></p>
        <p style={{ marginTop: '5rem' }}><span role='img' aria-label='point left' style={{fontSize:'1.5rem'}}>👈</span> Follow the navigation links!</p>
      </div>
    </Layout>
  )
}

export default ErrorPage
