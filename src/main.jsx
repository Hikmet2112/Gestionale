import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

// IMPORT FONTAWESOME

import {  library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
// import { far } from '@fortawesome/free-regular-svg-icons';
// import { fab } from '@fortawesome/free-brands-svg-icons';

library.add(fas);

//IMPORTS REACT-ROUTER-DOM

import {createBrowserRouter, RouterProvider} from 'react-router-dom';

// IMPORT PAGINE
import Aboutme from './pages/Aboutme.jsx';
import Stack from './pages/Stack.jsx';

//IMPORT STORE REDUX
// import store from './redux/store.js';
// import {Provider} from 'react-redux';


//CREAZIONE DEL BROWSER ROUTER
const router=createBrowserRouter([
  {
    path:"/",
    element: <App></App> ,
  },
  
  {
    path:"/AboutMe",
    element: <Aboutme></Aboutme>,
  },
  {
    path:"/Stack",
    element:<Stack></Stack> ,
  },

]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <Provider store={store}> */}
    <RouterProvider router={router}/>
    {/* </Provider> */}
  </React.StrictMode>,
)
