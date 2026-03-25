import "./style_header.css";
import { NavLink } from "react-router-dom";
import logoKasa from "../../assets/logo_kasa.png";

function Header() {
  return (
    <header className="kasa-header">
      <div className="kasa-logo">
        <img src={logoKasa} alt="Logo Kasa" />
      </div>
      <nav className="kasa-nav">
        <NavLink
          to="/">
          <div>Accueil</div>
        </NavLink>
        <NavLink
          to="/about">
         <div>A propos</div>
        </NavLink>
      </nav>
    </header>
  );
}

export default Header;