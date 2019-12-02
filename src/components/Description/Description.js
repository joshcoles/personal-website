import React from 'react';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import styles from './description.module.scss';

const Description = (props) => {

  // Prepare rich text from contentful to be transformed 
  // into components/markup by rich text renderer package
  const document = {
    nodeType: 'document',
    data: {},
    content: [
      ...props
      .data
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