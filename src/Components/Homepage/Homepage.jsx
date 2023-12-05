import { NavLink } from 'react-router-dom'
import "./homepage.scss"

const Homepage = () => {
  return (
    <section className="homepage">
      <h1>KIPPER</h1>
      {/* <p>A web 5 application that allows institution to attach credentials to put together you credentials one can store their academic </p> */}
      {/* <p>A web 5 application that allows institution to attach  to put together you credentials one can store their academic </p> */}
      <NavLink to="get-started"><button className="get-started">Get Started</button></NavLink>
    </section>
  )
}

export default Homepage