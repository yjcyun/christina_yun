import React from 'react'
import Layout from '../components/Layout'
import Portfolio from '../components/Portfolio'
import SEO from '../components/SEO'

const IndexPage = () => {
  return (
    <Layout>
      <SEO title='Portfolio' />
      <div>
        <Portfolio />
      </div>
    </Layout>
  )
}


export default IndexPage;
