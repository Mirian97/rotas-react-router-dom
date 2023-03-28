import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import MainRoutes from './routes';
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
  <BrowserRouter>
    <React.StrictMode>
      <MainRoutes />
    </React.StrictMode>
  </BrowserRouter>,
  document.getElementById('root')
);
