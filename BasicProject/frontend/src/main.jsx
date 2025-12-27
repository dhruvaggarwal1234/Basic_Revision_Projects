import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, Router, RouterProvider } from 'react-router-dom'
import Layout from './components/Layout/Layout.jsx'
import Home from './components/Home/Home.jsx'
import About from './components/About.jsx'
import Contact from './components/FeatureCard/Contacts/Contact.jsx'



const router = createBrowserRouter([
  {
    path :'/',
    element : <Layout />,

    children:[

      {path : '',
        element: <Home />
      },

      {
        path : 'about',
        element : <About />
      }
      ,
      {
        path : 'contact',
        element: <Contact />
      }


    ],
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
