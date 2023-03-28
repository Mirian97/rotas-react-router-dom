import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import MainRoutes from "./routes";

ReactDOM.render(
  <BrowserRouter>
    <React.StrictMode>
      <MainRoutes />
    </React.StrictMode>
  </BrowserRouter>,
  document.getElementById('root')
);
