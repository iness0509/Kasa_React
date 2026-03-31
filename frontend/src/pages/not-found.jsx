import { Link } from "react-router-dom";
import "./not-found.css";

function NotFound() {
  return (
    <main className="not-found">
      <h1>404</h1>
      <p>Oups! La page que <br className="not-found-br" /> vous demandez n'existe pas.</p>
      <Link to="/" className="not-found-link">
        Retourner sur la page d’accueil
      </Link>
    </main>
  );
}

export default NotFound;