import * as React from 'react'
import { Link } from 'gatsby'
import Layout from '../../components/layout'

const RaidIndexPage = ({location}) => {
  return (
    <Layout 
      location={location}
      pageTitle="Accueil WVW"
      baseline="PAGE ACCUEIL WVW"
    >
      <p>Accueil WVW</p>
      <nav>
        <ul>
          <li>build</li>
          <li>Guides</li>
        </ul>
      </nav>
    </Layout>

    
  )
}

export default RaidIndexPage