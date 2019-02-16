import React from 'react';
import ReactDOM from 'react-dom';
import './cv.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

// Import the Amplify Libraries and config
import Amplify from '@aws-amplify/core'
import config from './aws-exports'
Amplify.configure(config)

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
