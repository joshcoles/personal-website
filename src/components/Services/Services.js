import React from 'react';
import Service from './Service';

const services = (props) => {
  
  const serviceList = props.services.map((service, index) => {
    return <Service key={index} serviceInfo={service}></Service>
  })

  return (
    <div className="services container-fluid">
      {serviceList}
    </div>
  )
}

export default services;