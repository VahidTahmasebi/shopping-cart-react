import { NavLink } from "react-router-dom";
import "./Navigation.css";

const Navigation = () => {
  return (
    <header className='mainNavigation'>
      <nav>
        <div>
          <ul>
            <li>
              <NavLink
                to='/'
                className={(active) => (active.isActive ? "activeLink" : "")}>
                Vahid Shopping
              </NavLink>
            </li>
          </ul>
        </div>
        <ul>
          <li>
            <NavLink
              to='/cart'
              className={(active) => (active.isActive ? "activeLink" : "")}>
              cart
            </NavLink>
          </li>
          <li>
            <NavLink
              to='signup'
              className={(active) => (active.isActive ? "activeLink" : "")}>
              signup
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navigation;
