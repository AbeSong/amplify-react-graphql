import { Link } from "react-router-dom";

export default function AppFooter() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="site-footer_top">
          <h2>Protect your most valuable business asset.</h2>

          <Link
            to="/trademarkable/trademark/"
            className="button button-primary"
          >
            Trademark your brand
          </Link>
        </div>
        <hr />
        <div className="site-footer_bottom">
          <Link
            className="site-logo"
            to="/"
            rel="home"
          >
            Trademarkable
          </Link>
          <div>
            <nav className="site-nav" aria-label="Footer Menu">
              <div className="menu-footer-container">
                <ul id="menu-footer" className="main-menu">
                  <li id="menu-item-42" className="menu-item menu-item-42">
                    <Link to="/faq/">FAQ</Link>
                  </li>
                  <li id="menu-item-68" className="menu-item menu-item-68">
                    <Link to="/about/">About</Link>
                  </li>
                  <li id="menu-item-143" className="menu-item menu-item-143">
                    <Link to="/terms-of-service/">
                      Terms of Service
                    </Link>
                  </li>
                  <li
                    id="menu-item-144"
                    className="menu-item menu-item-privacy-policy menu-item-144"
                  >
                    <Link
                      rel="privacy-policy"
                      to="/privacy-policy/"
                    >
                      Privacy Policy
                    </Link>
                  </li>
                </ul>
              </div>{" "}
            </nav>
            <p className="copyright">
              © {new Date().getFullYear()} Trademarkable. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

// function Copyright() {
//   return (
//     <Typography variant="body2" color="text.secondary" align="center">
//       {'Copyright © '}
//       <Link color="inherit" href="https://mui.com/">
//         Your Website
//       </Link>{' '}
//       {new Date().getFullYear()}
//       {'.'}
//     </Typography>
//   );
// }
