import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';
import './layout.css';

const Layout = ({ children }) => {
  
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          author
        }
      }
    }
  `);

  const author = data.site.siteMetadata.author; 

  return (
    <Fragment>
      <main>{children}</main>
      <footer>
        <span>© {new Date().getFullYear()}, Built by {author} using <a href="https://www.gatsbyjs.org">Gatsby.</a></span>
      </footer>
    </Fragment>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
