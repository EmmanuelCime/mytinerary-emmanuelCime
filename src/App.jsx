import { RouterProvider, createBrowserRouter } from "react-router-dom"
import Home from "./Pages/Home.jsx"
import Cities from "./Pages/Cities.jsx"
import Details from "./Pages/Details.jsx"
import NotFound from "./Pages/NotFound.jsx"
import StandardLayout from "./Layouts/StandardLayout.jsx"
import DetailsLayout from "./Layouts/DetailsLayout.jsx"


const router = createBrowserRouter([
  {
    element: <StandardLayout></StandardLayout>,
    children: [
      { path: "/", element: <Home></Home> },
      { path: "/home", element: <Home></Home> },
      { path: "/cities", element: <Cities></Cities> }
    ]
  },
  {
    element: <DetailsLayout></DetailsLayout>,
    children: [
      { path: "/details", element: <Details></Details> }
    ]
  },
  { path: "/*", element: <NotFound></NotFound> }
])

function App() {

  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  )
}


export default App