import React from 'react';
// import styles from './description.module.scss';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { useStaticQuery, graphql } from 'gatsby';

const Description = () => {

  const queryData = useStaticQuery(
    graphql`
      {
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
      }
    `
  );

  const document = {
    nodeType: 'document',
    data: {},
    content: [
      ...queryData
      .allContentfulDescription
      .edges[0]
      .node
      .richDescriptionText
      .json
      .content[0]
      .content
    ]
  }

  return (
    <div className="description container-fluid">
      <div className="row">
        <div className="col-xs-12">
          <h3 className="description-content">{documentToReactComponents(document)}</h3>
        </div>
      </div>
    </div>
  )
  
}

export default Description;