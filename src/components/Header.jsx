import React from 'react'

const Header = () => {
  return (
    <header id="topnav" className="defaultscroll sticky">
    <div className="container">
      {/* Logo container*/}
      <div>
        <a className="logo" href="index.html">
          <img src="/images/logo-dark.png" height={22} alt="" />
        </a>
      </div>
      <div className="buy-button">
        <a href="javascript:void(0)" className="btn btn-primary">
          Signup
        </a>
      </div>

      <div className="menu-extras">
        <div className="menu-item">
          {/* Mobile menu toggle*/}
          <a className="navbar-toggle" id="isToggle" onclick="toggleMenu()">
            <div className="lines">
              <span />
              <span />
              <span />
            </div>
          </a>
          {/* End mobile menu toggle*/}
        </div>
      </div>
      <div id="navigation">
        {/* Navigation Menu*/}
        <ul className="navigation-menu" id="navmenu-nav">
          <li className="has-submenu">
            <a href="#home">Home</a>
          </li>
          <li className="has-submenu">
            <a href="#service">Services</a>
          </li>
          <li className="has-submenu">
            <a href="#pricing">Pricing</a>
          </li>
     
          <li className="has-submenu">
            <a href="#contact">Contact</a>
          </li>
        </ul>
        {/*end navigation menu*/}
      </div>
      {/*end navigation*/}
    </div>
    {/*end container*/}
  </header>
  )
}

export default Header
