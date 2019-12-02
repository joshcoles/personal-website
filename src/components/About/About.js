import React from 'react';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

const About = (props) => {

  // Prepare rich text from contentful to be transformed 
  // into components/markup by rich text renderer package
  const document = {
    nodeType: 'document',
    data: {},
    content: [
      ...props
      .data
      .edges[0]
      .node
      .childContentfulAboutDescriptionRichTextNode
      .json
      .content[0]
      .content
    ]
  }

  const descriptionMarkup = documentToReactComponents(document);

  return (
    <div className="about container-fluid">
      <div className="about-image col-sm-6 col-xs-12">
      </div>
      <div className="about-description col-sm-6 col-xs-12">
        <h2 className="about-heading">{props.data.edges[0].node.title}</h2>
        <p className="about-content">{descriptionMarkup}</p>
      </div>
    </div>
  )
}

export default About;