import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import * as serviceWorker from './serviceWorker';

import Homepage from './pages/homepage.jsx';

ReactDOM.render(
  <Homepage />,
  document.getElementById('root')
);

serviceWorker.unregister();
