import { useState } from "react";
import "./style_collapse.css";

function Collapse({ title, children }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="collapse">
      <div className="title-collapse" onClick={() => setIsOpen(!isOpen)}>
        <h3>{title}</h3>
        <i className={`fas fa-chevron-${isOpen ? "down" : "up"}`}></i>
      </div>

      {isOpen && <div className="content-collapse">{children}</div>}
    </div>
  );
}

export default Collapse;
