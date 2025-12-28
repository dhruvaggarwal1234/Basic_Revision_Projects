import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import UserContextProvider from './context/UserContextProvider'
import Profile from './Components/Profile'
import Login from './Components/Login'

function App() {
  const [count, setCount] = useState(0)

  return (
    <UserContextProvider>
    

      <div>Learning about the context Api </div>
      <Login/>
      <Profile/>

    </UserContextProvider>
  )
}

export default App
