import React from 'react';
import ReactDom from 'react-dom';
import App from './App'
import './index.css'
import {ContextProvider} from './contexts/ContextProvider'


ReactDom.render(
  <ContextProvider>
    <App />
  </ContextProvider>, document.getElementById('root'));