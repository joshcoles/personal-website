import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/Layout.js';
import Hero from '../components/Hero/Hero.js';
import Description from '../components/Description/Description.js';
import Services from '../components/Services/Services.js';
import About from '../components/About/About.js';
import Projects from '../components/Projects/Projects.js';

export default ({ data }) => {

  return (
    <Layout>
      <Hero data={data.allContentfulHero.edges[0].node} />
      <Description data={data.allContentfulDescription.edges[0].node} />
      <Services data={data.allContentfulService.edges} />
      <About data={data.allContentfulAbout}/>
      <Projects data={data.allContentfulProject.edges}/>
    </Layout>
  )
}

export const query = graphql`
  query IndexQuery {
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
    allContentfulDescription {
      edges {
        node {
          id
          richDescriptionText {
            json
          }
        }
      }
    }
    allContentfulService {
      edges {
        node {
          description
          name
          altText
          image {
            file {
              url
            }
          }
        }
      }
    }
    allContentfulAbout {
      edges {
        node {
          title
          image {
            description
            file {
              url
            }
          }
          childContentfulAboutDescriptionRichTextNode {
            json
          }
        }
      }
    }
    allContentfulProject {
      edges {
        node {
          id
          title
          url
          techStack {
            content
          }
          childContentfulProjectDescriptionTextNode {
            description
          }
        }
      }
    }
  }
`;
