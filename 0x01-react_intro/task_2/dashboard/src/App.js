// task_2/dashboard/src/App.js

import React from 'react';
import './App.css';
import { getFullYear, getFooterCopy } from './utils';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* Your header content */}
      </header>
      <div className="App-body">
        <p>Login to access the full dashboard</p>

        {/* Email Input */}
        <div>
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" />
        </div>

        {/* Password Input */}
        <div>
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" />
        </div>

        {/* OK Button */}
        <button>OK</button>
      </div>
      <footer className="App-footer">
        <p>{getFooterCopy(true)}</p>
        <p>{getFullYear()}</p>
      </footer>
    </div>
  );
}

export default App;
