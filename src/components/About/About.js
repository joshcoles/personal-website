import React from 'react';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import styles from './about.module.scss';

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
  const image = { ...props.data.edges[0].node.image };

  return (
    <section className={styles.about}>
      <div className={styles.image} style={{backgroundImage: `url(${image.file.url})`}}></div>
      <div className={styles.content}>
        <h2>{props.data.edges[0].node.title}</h2>
        <p>{descriptionMarkup}</p>
      </div>
    </section>
  )
}

export default About;