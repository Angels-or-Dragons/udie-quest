import * as React from 'react'
import Layout from './layout'

import BuildTraits from './gw2ui/buildtraits'
import BuildArmory from './gw2ui/buildarmory'

import { MDXProvider } from '@mdx-js/react'


const shortcodes = { 
  BuildTraits,
  BuildArmory
}

const BuildLayout = ({location, children}) => {
  return (
    <Layout location={location} pageTitle="C'est une page de build">
      <p>C'est une page de build</p>
      <MDXProvider components={shortcodes}>{children}</MDXProvider>
    </Layout>
  )
}
export default BuildLayout