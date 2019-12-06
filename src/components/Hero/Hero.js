import React from 'react';
import Social from '../Social/Social.js';
import styles from './hero.module.scss';

const Hero = (props) => {

  return (
    <section className={styles.hero} style={{ backgroundImage: `url(${props.data.heroImage.file.url})`}}>
      
      <Social items={props.data.childrenContentfulHeroSocialMediaItemJsonNode}/>
      <div className={styles.content}>
        <h1>{props.data.name}</h1>
        <p>{props.data.description}.</p>
      </div>
    </section>
  )
};

export default Hero;