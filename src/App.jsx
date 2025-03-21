import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Weather from './pages/Weather'
import Weatherload from './pages/Weatherload'


const routing = createBrowserRouter([
  {
    path:"/",
    element:<Weather/>
  },
  {
    path:"weatherload",
    element:<Weatherload/>
  }
])
const App = () => {
  return (
   <RouterProvider router={routing}/>
  )
}

export default App