import React from "react";
import "./index.less";

// react-router-dom
import { BrowserRouter as Router, Link } from "react-router-dom";

export default function Nav({ nav }) {
  return (
    <div className="app-nav">
      <Router>
        {nav.map((navigat) => {
          return (
            <div className="app-nav-menu" key={navigat.id}>
              <Link to={navigat.path}>{navigat.name}</Link>
            </div>
          );
        })}
      </Router>
    </div>
  );
}
