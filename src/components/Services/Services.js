import React from 'react';
import Service from './Service/Service.js';
import styles from './services.module.scss';

const services = (props) => (
  <section className={styles.services}>
    <div className={styles.inner}>
      {
        props.data.map((service, index) => 
          <Service key={index} data={service.node}></Service>
        )
      }
    </div>
  </section>
);

export default services;