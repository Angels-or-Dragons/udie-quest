import React, { useContext } from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import { ThemeContext } from '../context/themeContext';
import Navbar from './navbar';
import Header from './header';


const Layout = ({ pageTitle, baseline, location, children }) => {

  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  const { theme } = useContext(ThemeContext);

  return (
    <div className={`${theme === 'light' ? 'theme-light' : 'theme-dark' } bg-primary text-main-text transition-all duration-300 m-0 p-0 min-h-screen`}>
      <title>{pageTitle} | {data.site.siteMetadata.title}</title>
      <Navbar />
      <Header location={location} pageTitle={pageTitle} baseline={baseline}/>
      <div className="container mx-auto">
        <main>
          {children}
        </main>
      </div>
    </div>
  )
}

export default Layout