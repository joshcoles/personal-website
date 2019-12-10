import React from 'react';
import styles from './service.module.scss';

const Service = (props) => (
  <div className={styles.service}>
    <img src={props.data.image.file.url} alt={props.data.image.name} width="100" height="100" />
    <h2>{props.data.name}</h2>
    <p>{props.data.description}</p>
  </div>
)

export default Service;