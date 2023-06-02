// Write your JS code here
import {Link} from 'react-router-dom'
import './index.css'

const Header = () => (
  <nav className="nav-container">
    <div className="nav-content">
      <div className="header-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
          alt="logo"
          className="logo"
        />
        <button type="button" className="logout-button">
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-log-out-img.png"
            alt="logout"
            className="logout-image"
          />
        </button>
      </div>
      <div className="menu-container">
        <ul className="list-container">
          <li>
            <img
              src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-icon.png"
              alt="home"
              className="home-btn"
            />
          </li>
          <li>
            <img
              src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-products-icon.png"
              alt="products"
              className="home-btn"
            />
          </li>
          <li>
            <img
              src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-cart-icon.png"
              alt="cart"
              className="home-btn"
            />
          </li>
        </ul>
      </div>
      <img
        src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
        alt="logo"
        className="logo-lg-img"
      />
      <div className="list-menu-container">
        <ul className="list-lg-container">
          <Link to="/">
            <li className="list-item">Home</li>
          </Link>
          <Link to="/products">
            <li className="list-item">Products</li>
          </Link>
          <Link to="/cart">
            <li className="list-item">Cart</li>
          </Link>
        </ul>
        <button type="button" className="logout-lg-btn">
          Logout
        </button>
      </div>
    </div>
  </nav>
)

export default Header
