import React, { useState } from "react";
import "../style/navbar.css";
import logo from "../assets/kdmchrc.png";
import {
  Bars3Icon,
  XMarkIcon,
  ChevronDownIcon,
} from "@heroicons/react/24/outline";
import { Link, useLocation } from "react-router-dom";

const navItems = [
  {
    name: "About Us",
    to: "/about",
  },
  { name: "Course", to: "/Course" },
  {
    name: "Infrastructure",
    to: "/Infrastructure",
  },
  {
    name: "Information as per NMC",
    to: "/Information",
  },
  { name: "Contact Us", to: "/Contact" },
];

const navItems1 = [
  { name: "Home", to: "/" },
  {
    name: "About Us",
    to: "/about",
  },
  { name: "Course", to: "/Course" },
  {
    name: "Infrastructure",
    to: "/Infrastructure",
  },
  {
    name: "Information as per NMC",
    to: "/Information",
  },
  { name: "Contact Us", to: "/Contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const location = useLocation();

  const toggleDropdown = (name) => {
    setActiveDropdown(activeDropdown === name ? null : name);
  };

  return (
    <div className="navbar-main">
      <nav className="navbar-container">
        <div className="navbar">
          <img src={logo} alt="Logo" className="logo" />
          <div className="text-container">
            <h3 className="tagline">Walk in Interview</h3>
            <h3 className="user-greeting">Govt Approval</h3>
          </div>
        </div>

        {/* Mobile View Header */}
        <div className="navbar1">
          <Link to="/">Home</Link>
          <button className="menu-toggle" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? (
              <XMarkIcon className="icon" />
            ) : (
              <Bars3Icon className="icon" />
            )}
          </button>
        </div>

        {/* Mobile Nav Links */}
        <div className={`navlinks ${isOpen ? "open" : ""}`}>
          {navItems.map((item) => (
            <div key={item.name} className="nav-item-mobile">
              {item.dropdown ? (
                <>
                  <button
                    className="dropdown-toggle-mobile"
                    onClick={() => toggleDropdown(item.name)}
                  >
                    {item.name}
                    <ChevronDownIcon
                      className={`chevron-icon ${activeDropdown === item.name ? "rotate" : ""}`}
                    />
                  </button>
                  <div
                    className={`mobile-dropdown-content ${activeDropdown === item.name ? "show" : ""}`}
                  >
                    {item.dropdown.map((subItem) => (
                      <Link
                        key={subItem.name}
                        to={subItem.to}
                        className={
                          location.pathname === subItem.to ? "active" : ""
                        }
                        onClick={() => setIsOpen(false)}
                      >
                        {subItem.name}
                      </Link>
                    ))}
                  </div>
                </>
              ) : (
                <Link
                  to={item.to}
                  className={location.pathname === item.to ? "active" : ""}
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              )}
            </div>
          ))}
        </div>

        {/* Desktop Nav Links */}
        <div className="navlinks1">
          {navItems1.map((item) => (
            <div key={item.name} className="nav-item-desktop">
              {item.dropdown ? (
                <div className="desktop-dropdown">
                  <Link to={item.to} className="desktop-dropdown-trigger">
                    {item.name}
                    <ChevronDownIcon className="chevron-icon" />
                  </Link>
                  <div className="desktop-dropdown-content">
                    {item.dropdown.map((subItem) => (
                      <Link
                        key={subItem.name}
                        to={subItem.to}
                        className={
                          location.pathname === subItem.to ? "active" : ""
                        }
                      >
                        {subItem.name}
                      </Link>
                    ))}
                  </div>
                </div>
              ) : (
                <Link
                  to={item.to}
                  className={location.pathname === item.to ? "active" : ""}
                >
                  {item.name}
                </Link>
              )}
            </div>
          ))}
        </div>
      </nav>
    </div>
  );
}
