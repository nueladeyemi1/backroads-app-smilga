import React from 'react'
import logo from '../images/logo.svg'
import { pageLinks, socialLinks } from "./Data";

const Navbar = () => {
  return (
    <>
      <nav className="navbar">
        <div className="nav-center">
          <div className="nav-header">
            <img src={logo} className="nav-logo" alt="backroads" />
            <button type="button" className="nav-toggle" id="nav-toggle">
              <i className="fas fa-bars"></i>
            </button>
          </div>
          {/* <!-- left this comment on purpose --> */}
          <ul className="nav-links" id="nav-links">
                {pageLinks.map(({id, text})=> {
                    return (
                    <li key={id}>
                    <a href={`#${text}`} className="nav-link">
                {text}
              </a>
            </li>)
                })}
              
          </ul>

          <ul className="nav-icons">
            {socialLinks.map(({id, socialTarget})=> {
                return (
                  <li key={id}>
                    <a
                      href={`https://www.${socialTarget}.com`}
                      target="_blank"
                      rel="noreferrer"
                      className="nav-icon"
                    >
                      <i className={`fab fa-${socialTarget}`}></i>
                    </a>
                  </li>
                );
            })}
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar