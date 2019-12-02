import React from 'react';
import { FaTwitter, FaFacebook, FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa';

const Social = (props) => (
  <div>
    <ul>
      {
        props.items.map((item) => {
          let icon;

          switch(item.type) {
            case 'twitter':
              icon = <FaTwitter/>;
              break;
            case 'facebook':
              icon = <FaFacebook/>;
              break;
            case 'linkedin':
              icon = <FaLinkedin/>;
              break;
            case 'github':
              icon = <FaGithub/>;
              break;
            case 'instagram':
              icon = <FaInstagram/>;
              break;
          }

          return (
            <li key={item.id} className='twitter'>
              <a href={item.url} target='_blank' rel='noopener noreferrer'>
                {item.type} {icon}
              </a>
            </li>
          )
        })
      }
    </ul>
  </div>  
)



export default Social;