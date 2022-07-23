import * as React from 'react'
import { Link, graphql } from 'gatsby'

import { MDXRenderer } from 'gatsby-plugin-mdx'
import Layout from '../../../components/layout'

const RaidAilesPage = ({ location, data }) => {
  return (
    <Layout location={location} pageTitle="Liste des ailes">
      {
        data.allFile.nodes.map(node => (

          <article key={node.childMdx.id}>
            <Link to={`/raids/ailes/${node.childMdx.slug}`}><h2> {node.childMdx.frontmatter.title} </h2></Link>
            <p>Maj le: {node.childMdx.frontmatter.date}</p>
            <MDXRenderer>
              {node.childMdx.body}
            </MDXRenderer>
          </article>
        ))
      }
    </Layout>
  )
}

export const query = graphql`
query {
  allFile(
    filter: {sourceInstanceName: {eq: "raids_wings"}}
    sort: {order: DESC, fields: childMdx___frontmatter___date}
  ) {
    nodes {
      childMdx {
        frontmatter {
          title
          date(formatString: "DD/MM/YYYY")
        }
        id
        body
        slug
      }
      sourceInstanceName
    }
  }
}

`

export default RaidAilesPage