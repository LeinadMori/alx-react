// task_2/dashboard/src/Notifications.js

import React from 'react';
import closeIcon from './close-icon.png';
import './Notifications.css';
import { getLatestNotification } from './utils';

function Notifications() {
  const handleClick = () => {
    console.log('Close button has been clicked');
  };

  return (
    <div className="Notifications">
      <button
        onClick={handleClick}
        style={{
          float: 'right',
          backgroundColor: 'transparent',
          border: 'none',
          cursor: 'pointer',
        }}
        aria-label="Close"
      >
        <img src={closeIcon} alt="Close" />
      </button>
      <p>
        <strong>Here is the list of notifications:</strong>
      </p>
      <ul>
        <li data-priority="default">New course available</li>
        <li data-priority="urgent">New resume available</li>
        <li
          dangerouslySetInnerHTML={{
            __html: getLatestNotification(),
          }}
        ></li>
      </ul>
    </div>
  );
}

export default Notifications;
