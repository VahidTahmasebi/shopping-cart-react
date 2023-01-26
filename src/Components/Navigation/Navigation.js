import { NavLink } from "react-router-dom";
import { useAuth } from "../../Providers/AuthProvider";
import { useCart } from "../../Providers/CartProvider";
import "./Navigation.css";

const Navigation = () => {
  const { cart } = useCart();

  const userData = useAuth();

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
          <li className='cartLink'>
            <NavLink
              to='/cart'
              className={(active) => (active.isActive ? "activeLink" : "")}>
              cart <span>{cart.length}</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to={userData ? "/profile" : "/login"}
              className={(active) => (active.isActive ? "activeLink" : "")}>
              {userData ? "profile" : "Login/Signup"}
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navigation;
