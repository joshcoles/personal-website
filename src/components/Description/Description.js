import React from 'react';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import styles from './description.module.scss';
import { FaLevelDownAlt } from 'react-icons/fa';

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
    <section className={styles.description}>
      <h3>{documentToReactComponents(document)}&nbsp;<FaLevelDownAlt size={25}/></h3>
    </section>
  )
  
}

export default Description;