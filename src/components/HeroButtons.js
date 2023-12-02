
import { Link } from "react-router-dom";

export default function HeroButtons() {
  return (
    <div className="hero-buttons">
      <Link
        to="/trademarkable/trademark/"
        className="button button-primary"
      >
        Trademark Your Brand
      </Link>
      {/* <Link
        to="/#how-it-works"
        className="button button-secondary"
      >
        How It Works
      </Link> */}
      <a
        href="/#how-it-works"
        className="button button-secondary"
      >
        How It Works
      </a>
    </div>
  );
}
