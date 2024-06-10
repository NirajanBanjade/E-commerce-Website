import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import Productdetail from './MAINSCREEN/productdetail';
import Mainscreen from './MAINSCREEN/mainScreen';


import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';

const root = document.getElementById('root');

ReactDOM.createRoot(root).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index={true} element={<Mainscreen />} />
          <Route path="/List/:id" element={<Productdetail/>} />
        </Route>
      </Routes>
    </Router>
  </React.StrictMode>
);

reportWebVitals();
