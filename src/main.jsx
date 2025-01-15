import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter,RouterProvider } from 'react-router-dom';
import './index.css'
import App from './App.jsx';
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Productpage from './pages/Productpage.jsx';
import Giftpage from './pages/Giftpage.jsx';

const appRoute=createBrowserRouter([
  {
    path:'/',
    element:<App/>,
    children:[
      {
        path:'/',
        element:<Home/>
      },
      {
        path:'/about',
        element:<About/>
      },
      {
        path:'/products/:productId',
        element:<Productpage/>
      },
      {
        path:'/gift',
        element:<Giftpage/>
      }
      
    ]
    
  },
  
  
]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={appRoute} />
   
  </StrictMode>,
)
