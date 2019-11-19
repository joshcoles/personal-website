import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import styles from './hero.module.scss';
import Social from '../Social/Social.js';

const Hero = () => {
  const queryData = useStaticQuery(
    graphql`
      {
        allContentfulHero {
          edges {
            node {
              name
              description
              childrenContentfulHeroSocialMediaItemJsonNode {
                id
                url
                type
              }
              heroImage {
                id
                description
                file {
                  url
                }
              }
            }
          }
        }
      }
    `
  );

  const data = {...queryData.allContentfulHero.edges[0].node};
  
  return (
    <div style={{
      backgroundImage: `url(${data.heroImage.file.url})`
    }}>
      <Social items={data.childrenContentfulHeroSocialMediaItemJsonNode}/>

      <div className="row">
        <div className="col-md-11 col-xs-12 banner-content">
          <h1 className="banner-title">{data.name}</h1>
          <p className="banner-description">{data.description}.</p>
        </div>
      </div>
    </div>
  )
};


export default Hero;