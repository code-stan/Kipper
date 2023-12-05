import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import Layout from "./Layout/Layout";
import Homepage from "./Homepage/Homepage";
import Webapppage from "./Webapppage/Webapppage";

import '../Styles/styles.scss'

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout/>}>
        <Route index element={<Homepage/>}/>
        <Route path="get-started" element={<Webapppage/>}/>
      </Route>
    )
  )
  return (
    <>
      <RouterProvider router={router}/>
    </>
  )
}

export default App