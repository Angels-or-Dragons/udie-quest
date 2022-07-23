import * as React from 'react'
import { Link } from 'gatsby'
import Layout from '../../components/layout'

const RaidIndexPage = ({location}) => {
  return (
    <Layout location={location} pageTitle="Accueil Raids">
      <p>Accueil Raids</p>
      <nav>
        <ul>
          <li><Link to="/raids/builds">Builds</Link></li>
          <li><Link to="/raids/ailes">Guides</Link></li>
        </ul>
      </nav>
    </Layout>
  )
}

export default RaidIndexPage