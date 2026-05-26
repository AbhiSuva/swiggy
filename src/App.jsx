import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Head from './components/Head'
import Body from './components/Body'
import { Route, Routes } from 'react-router-dom'
import Restaurantmenu from './components/Restaurantmenu'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Routes>
        <Route path='/' element={<Head/>}>
            <Route path='/' element={<Body />}></Route>
            <Route path='/restaurantMenu/:id' element={<Restaurantmenu />}></Route>
        </Route>
        
    </Routes>
  )
}

export default App
