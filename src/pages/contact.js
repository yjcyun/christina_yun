import React from 'react'
import Contact from '../components/Contact'
import Layout from '../components/layout/Layout'
import SEO from '../components/SEO'

const contact = () => {
  return (
    <Layout>
    <SEO title='Contact' />
      <Contact />
    </Layout>
  )
}

export default contact