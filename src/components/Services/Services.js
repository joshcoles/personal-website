import React from 'react';
import Service from './Service/Service.js';

const services = (props) => {

  return (
    <div className="services container-fluid">
      {
        props.data.map((service, index) => 
          <Service key={index} data={service.node}></Service>
        )
      }
    </div>
  );
  
}

export default services;