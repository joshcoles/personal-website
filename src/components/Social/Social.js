import React from 'react';
import { FaTwitter, FaFacebook, FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa';
import styles from './social.module.scss';

const Social = (props) => (
  <div className={styles.social}>
    <ul className={styles.list}>
      {
        props.items.map((item) => {
          let icon;

          switch(item.type) {
            case 'twitter':
              icon = <FaTwitter size={25}/>;
              break;
            case 'facebook':
              icon = <FaFacebook size={25}/>;
              break;
            case 'linkedin':
              icon = <FaLinkedin size={25}/>;
              break;
            case 'github':
              icon = <FaGithub size={25}/>;
              break;
            case 'instagram':
              icon = <FaInstagram size={25}/>;
              break;
          }

          console.log(styles[item.type])

          return (
            <li className={`${styles.icon} ${styles[item.type]}`} key={item.id}>
              <a href={item.url} target='_blank' rel='noopener noreferrer'>{icon}</a>
            </li>
          )
        })
      }
    </ul>
  </div>  
)



export default Social;