import React from 'react';

const Service = (props) => (
  <div className="service">
    <img src={props.data.image.file.url} alt={props.data.image.name} width="100" height="100" />
    <h2 className="service-name">{props.data.name}</h2>
    <p className="service-description">{props.data.description}</p>
  </div>
)

export default Service;