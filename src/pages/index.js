import * as React from 'react'
import Layout from '../components/layout'

const IndexPage = ({location}) => {
  return (
    <Layout location={location} pageTitle="Home Page">
      <p>I'm making this by following the Gatsby Tutorial.</p>
    </Layout>
  )
}
export default IndexPage