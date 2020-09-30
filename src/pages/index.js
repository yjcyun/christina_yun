import React from 'react'
import Layout from '../components/layout/Layout';
import Portfolio from '../components/Portfolio/Portfolio';
import SEO from '../components/SEO';

const IndexPage = () => {
  return (
    <Layout>
      <SEO title='Portfolio' />
      <Portfolio />
    </Layout>
  )
}

export default IndexPage;