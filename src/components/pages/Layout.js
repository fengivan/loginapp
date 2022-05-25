import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <nav>

        <ul>
          <li>
            <Link to="/HomePage">Home</Link>
            
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="/Login">Login</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  )
};

export default Layout;