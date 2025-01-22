import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import Productdetail from './MAINSCREEN/productdetail';
import Mainscreen from './MAINSCREEN/mainScreen';
import { Provider } from 'react-redux';
import store from './store';


import {
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom';
import CartScreen from './MAINSCREEN/CartScreen';
import Login from './MAINSCREEN/Login';


const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <Mainscreen />,
      },
      {
        path: '/List/:id',
        element: <Productdetail />,
      },
      {
        path: '/cart',
        element: <CartScreen/>,
      }
      , {
        path: '/login',
        element: <Login/>,
      }
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store} >
    <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);


// import {
//   BrowserRouter as Router,
//   Routes,
//   Route
// } from 'react-router-dom';

// const root = document.getElementById('root');

// ReactDOM.createRoot(root).render(
//   <React.StrictMode>
//     <Router>
//       <Routes>
//         <Route path="/" element={<App />}>
//           <Route index={true} element={<Mainscreen />} />
//           <Route path="/List/:id" element={<Productdetail/>} />
//         </Route>
//       </Routes>
//     </Router>
//   </React.StrictMode>
// );



reportWebVitals();
