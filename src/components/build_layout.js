import * as React from 'react'
import Layout from './layout'

const BuildLayout = ({children}) => {
  return (
    <Layout pageTitle="Super Cool Blog Posts">
      <p>My blog post contents will go here (eventually).</p>
      {children}
    </Layout>
  )
}
export default BuildLayout