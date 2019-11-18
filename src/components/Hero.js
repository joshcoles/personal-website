import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

const Hero = () => {

  const data = useStaticQuery(graphql`
    query {
      allContentfulHero {
        edges {
          node {
            name
            description
            heroImage {
              title
              description
              file {
                url
              }
            }
          }
        }
      }
    }
  `);

    
  return (
    <div className="banner-background container-fluid">
      <div className="row">
        <div className="col-md-11 col-xs-12 banner-content">
          <h1 className="banner-title">{data.allContentfulHero.edges[0].node.name}</h1>
        </div>
      </div>
    </div>
  );
}

export default Hero;