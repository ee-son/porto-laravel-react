import React from 'react';

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg fixed-top bg-white">
      <div className="container">
        <h4 className="ms-3">Isan FH</h4>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarToggleExternalContent"
          aria-controls="navbarToggleExternalContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-end" id="navbarToggleExternalContent">
          <div className="navbar-nav me-3">
            <a className="nav-link" href="#home">Home</a>
            <a className="nav-link" href="#tech">Tech</a>
            <a className="nav-link" href="#project">Project</a>
            <a className="nav-link" href="#about">About</a>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
