import React from 'react';
import Social from '../Social/Social.js';

const Hero = (props) => {

  return (
    <section style={{ backgroundImage: `url(${props.data.heroImage.file.url})`}}>
      
      <Social items={props.data.childrenContentfulHeroSocialMediaItemJsonNode}/>
      <div className="row">
        <div className="col-md-11 col-xs-12 banner-content">
          <h1 className="title is-2 banner-title">{props.data.name}</h1>
          <p className="banner-description">{props.data.description}.</p>
        </div>
      </div>
    </section>
  )
};

export default Hero;