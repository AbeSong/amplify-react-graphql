import { NavLink, Link } from "react-router-dom";

export default function AppHeader() {

  // NOTE: THERE IS A BUG WHEN USING APP MENU
  const handleOpenClick = (e) => {
    e.preventDefault();
    e.target.classList.add("hide");
    document.querySelector(".mobile-close").classList.remove("hide");
    document.querySelector(".site-header .site-nav").style.display = "block"
  };

  const handleCloseClick = (e) => {
    e.preventDefault();
    e.target.classList.add("hide");
    document.querySelector(".mobile-open").classList.remove("hide");
    document.querySelector(".site-header .site-nav").style.display = "none"
  };

  return (
    <header className="site-header">
      <div className="container">
        <Link className="site-logo" to="/" rel="home">
          Trademarkable
        </Link>
        <div className="mobile-open" onClick={handleOpenClick}></div>
        <div className="mobile-close hide" onClick={handleCloseClick}></div>
        <nav className="site-nav" aria-label="Top Menu">
          <div className="menu-primary-container">
            <ul id="menu-primary" className="main-menu">
              <li id="faq" className="menu-item">
                <NavLink to="/faq">FAQ</NavLink>
              </li>
              <li id="about" className="menu-item">
                <NavLink to="/about">About</NavLink>
              </li>
              <li id="contactUs" className="menu-item">
                <NavLink to="/contact-us">Contact Us</NavLink>
              </li>
              <li id="apply" className="btn">
                <NavLink to="/trademarkable/trademark">Apply</NavLink>
              </li>
              <li id="admin" className="btn">
                <NavLink to="/admin">Admin</NavLink>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </header>
  );
}
