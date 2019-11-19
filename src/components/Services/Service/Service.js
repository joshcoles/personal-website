import React from 'react';

const Service = () => (
  <div className = "service" >
    <img src={this.props.serviceInfo.img} alt={this.props.serviceInfo.caption} width="100" height="100" />
    <h2 className="service-name">{this.props.serviceInfo.title}</h2>
    <p className="service-description">{this.props.serviceInfo.description}</p>
  </div>
)