import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Form from './Component/Form'

import { createBrowserRouter , Router, RouterProvider} from 'react-router-dom'
import Layout from './Layout'
import Table from './Component/Table'
import Newform from './Component/Newform'

function App() {
  const [count, setCount] = useState(0)

  const route = createBrowserRouter([
    {
      path:'/',
      element:<Layout/>,
      children:[
        {
          path:"/",
          element:<Form/>
        },
        {
          path:'/table',
          element:<Table/>
        },
        {
          path: '/newform/:id',
          element:<Newform/>
        }
      ]
    }

  ])

  return (
    <>
      <RouterProvider router={route}/>
    </>
  )
}

export default App
