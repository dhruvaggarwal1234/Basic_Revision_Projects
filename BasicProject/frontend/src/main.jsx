import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, createRoutesFromElements, Route, Router, RouterProvider } from 'react-router-dom'
import Layout from './components/Layout/Layout.jsx'
import Home from './components/Home/Home.jsx'
import About from './components/About.jsx'
import Contact from './components/FeatureCard/Contacts/Contact.jsx'
import User from './components/User/User.jsx'
import Github from "./components/Github/Github.jsx"



// const router = createBrowserRouter([
//   {
//     path :'/',
//     element : <Layout />,

//     children:[

//       {path : '',
//         element: <Home />
//       },

//       {
//         path : 'about',
//         element : <About />
//       }
//       ,
//       {
//         path : 'contact',
//         element: <Contact />
//       }


//     ],
//   }
// ])


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element= {<Layout/>}>

      <Route path='' element= {<Home/>}></Route>
      <Route path='Contact' element= {<Contact/>}></Route>
      <Route path='About' element= {<About/>}></Route>
      <Route path='User/:userId' element= {<User/>}></Route>
      <Route path='Github' element= {<Github/>}></Route>


    </Route>
  )
)


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
