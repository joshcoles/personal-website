import React from 'react';

const Social = (props) => (
  <div>
    <ul>
      {
      props.items.map((item) => (
        <li key={item.id} className="twitter">
          <a href={item.url} target="_blank" rel="noopener noreferrer">
            <i className={`fa fa-${item.type}`}>{item.type}</i>
          </a>
        </li>
      ))
      }
    </ul>
  </div>  
)


export default Social;