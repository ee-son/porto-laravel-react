import React, { useEffect, useState } from 'react';

function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`navbar navbar-expand-lg fixed-top ${
        scrolled ? 'bg-inverse' : 'bg-white'
      }`}
    >
      <div className="container">
        <h4 className="ms-3">Isan FH</h4>
        <button
          className={`navbar-toggler ${scrolled ? 'navbar-dark' : 'navbar-light'}`}
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarToggleExternalContent"
          aria-controls="navbarToggleExternalContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarToggleExternalContent"
        >
          <div className="navbar-nav me-3">
            <a className="nav-link" href="#home">
              Home
            </a>
            <a className="nav-link" href="#project">
              Project
            </a>
            <a className="nav-link" href="#about">
              About
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
