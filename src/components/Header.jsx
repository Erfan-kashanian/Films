import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="site-header">
      <div className="header-inner">

        <Link to="/" className="logo">
          <span className="logo-icon">▶</span>
          <span>MockFlix</span>
        </Link>

        <nav className="main-nav">
          <Link to="/">Home</Link>

          <a href="#movies">
            Movies
          </a>

          <a href="#series">
            Series
          </a>
        </nav>

        <div className="header-status">
          <span className="status-dot"></span>
          Mock Mode
        </div>

      </div>
    </header>
  );
}

export default Header;