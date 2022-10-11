import { NavLink } from "react-router-dom";

export default function Nav() {
    return (
      <nav className="nav">
        {/* <NavLink to="/" end>Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/work">Work</NavLink>
        <NavLink to="/contact">Contact</NavLink> */}

        {/* <a href="https://open.spotify.com/collection/tracks" className="logo">LOGO</a> */}
        <input type="checkbox" id="nav-check" />
        <div className="nav-header">
          <div className="nav-title">
            <NavLink to="/" end>
              GR8
            </NavLink>
          </div>
        </div>
        {/* <div className="nav-btn">
          <label htmlFor="nav-check">
            <span />
            <span />
            <span />
          </label>
        </div>

        <div className="nav-links">
          <NavLink to="/" end>
            Home
          </NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/work">Work</NavLink>
          <NavLink to="/contact">Contact</NavLink>
        </div> */}
      </nav>
    );
}
