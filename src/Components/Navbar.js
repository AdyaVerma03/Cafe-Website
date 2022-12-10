import React from "react";

function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark sticky-top">
        <a className="navbar-brand" href="#home">Coffee</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a className="nav-item nav-link" href="#home">Home</a></li>
            <li className="nav-item">
              <a className="nav-item nav-link" href="#aboutUs">About Us</a></li>
            <li className="nav-item">
              <a className="nav-item nav-link" href="#footer">Contact Us</a></li>
            <li className="nav-item">
              <a className="nav-item nav-link" href="#eshop">E-shop <i className="fab fa-light fa-cart-shopping"></i></a></li>
            <li className="nav-item">
              <a className="nav-item nav-link" href="#downloadApp">Download app</a></li>
          </ul>
        </div>
      </nav>
    </>
  )
}

export default Navbar