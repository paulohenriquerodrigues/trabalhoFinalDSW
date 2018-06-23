import React from 'react';
import ReactDOM from 'react-dom';
import Template from './Template';
import { BrowserRouter } from 'react-router-dom'

ReactDOM.render(
  <BrowserRouter>
    <Template />
  </BrowserRouter>,
  document.getElementById('root')
);
