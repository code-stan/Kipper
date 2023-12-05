import { Outlet } from "react-router-dom";
import Header from "./Aside";
import Footer from "./Footer";

const Layout = () => {
  return (
    <section className="container">
        <Header/>
        <Outlet/>
        <Footer/>
    </section>
  )
}

export default Layout