import './App.css'
import { NavBar } from './components/NavBar'
import { Home } from './pages/Home'
import { PrimerParcial } from './pages/PrimerParcial'
import { SegundoParcial } from './pages/SegundoParcial'

import {
  createHashRouter,
  RouterProvider,
} from "react-router-dom";

const router = createHashRouter([
  {
    element: <NavBar />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "primer-parcial",
        element: <PrimerParcial />
      },
      {
        path: "segundo-parcial",
        element: <SegundoParcial />
      }
    ]
  }
])

function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  )
}

export default App;