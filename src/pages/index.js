import React from 'react'
import Layout from '../components/Layout'
import Portfolio from '../components/Portfolio'
import SEO from '../components/SEO'

const IndexPage = () => {
  return (
    <Layout>
      <SEO title='Portfolio' />
      <Portfolio />
    </Layout>
  )
}


export default IndexPage;
