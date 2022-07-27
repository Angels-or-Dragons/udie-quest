import * as React from 'react'
import { Link } from 'gatsby'
import Layout from '../../components/layout'

const RaidIndexPage = ({location}) => {
  return (
    <Layout 
      location={location}
      pageTitle="Accueil fractals"
      baseline="On fait les CM?"
    >
      <p>Accueil fractals</p>
      <nav>
        <ul>
          <li>Builds</li>
          <li>Guides</li>
        </ul>
      </nav>
    </Layout>

    
  )
}

export default RaidIndexPage