import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';


import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider

} from 'react-router-dom';
/* it is the modules that are needed for creating the routing */

import Mainscreen from './MAINSCREEN/mainScreen';

/*This is to create a router in webbrowser */
const router=createBrowserRouter(
  createRoutesFromElements(

    <Route path="/" element={<App/>} >
      {/* The route is used to create the route link to render and nested route is for multi level routing. */}
       <Route index={true} path="/" element={<Mainscreen/>} />
       {/*Path means the pathfile, and element is the element to render on that path . */}
    </Route>
  )
)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>{/*The first router is prop (variable) and second is prop name(passed). */}
    {/*The wrapper is routerProvider to make the functionality of routing. */}
  </React.StrictMode>
);

reportWebVitals();
