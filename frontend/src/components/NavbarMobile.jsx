import { Link } from "react-router-dom"

const NavbarMobile = () => {
  return (
    <div>
        <nav>
          <ul className="flex space-y-10 flex-col w-full items-center">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/">Blog</Link>
            </li>
            <li>
              <Link to="/">Pages</Link>
            </li>
            <li>
              <Link to="/">Contact</Link>
            </li>
          </ul>
        </nav>
    </div>
  )
}

export default NavbarMobile