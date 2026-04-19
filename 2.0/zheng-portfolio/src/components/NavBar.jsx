import { useState, useRef, useLayoutEffect } from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimeline, faCubes, faLink } from '@fortawesome/free-solid-svg-icons';

import './NavBar.css';

export default function NavBar() {
  const [bgStyle, setBgStyle] = useState({});
  const navRef = useRef(null);

  const updateBgStyle = () => {
    const activeItem = navRef.current.querySelector('.nav-item.active');
    if (!activeItem) return;

    // Use offset measurements, relative to the nav container
    setBgStyle({
      width: `${activeItem.offsetWidth}px`,
      left: `${activeItem.offsetLeft}px`
    });
  };
  
  useLayoutEffect(() => {
    if (!navRef.current) return;

    // update bg style (before paint and after fonts load)
    updateBgStyle();
    document.fonts.ready.then(updateBgStyle).catch(() => {});
  }, []);

  const handleMouseEnter = (e) => {
    if (!navRef.current) return;
    const target = e.currentTarget;

    // Add disenable to previous active nav item and remove active
    // This will always be the curPage item unless user is hovering quickly
    const prevActive = navRef.current.getElementsByClassName('active')[0];
    if (prevActive && prevActive !== target) {
      prevActive.classList.add('disenable');
      prevActive.classList.remove('active');
    }

    // Add active class to the hovered nav item first so layout updates if needed
    target.classList.add('active');

    // Measure using offset metrics relative to the .navbar container
    setBgStyle({
      width: `${target.offsetWidth}px`,
      left: `${target.offsetLeft}px`
    });
  };

  const handleMouseLeave = () => {
    if (!navRef.current) return;

    // Remove disenable from curPage nav item
    const curPage = navRef.current.getElementsByClassName('disenable')[0];
    if (curPage) {
      curPage.classList.remove('disenable');

      // Remove active class from all nav items
      // Just in case user hovers quickly over multiple items
      const navItems = navRef.current.getElementsByClassName('nav-item');
      for (let item of navItems) {
        item.classList.remove('active');
      }

      // Re-add active class to the original active nav item (current page)
      curPage.classList.add('active');
    }

    const activeItem = navRef.current.querySelector('.nav-item.active');
    if (activeItem) {
      setBgStyle({
        width: `${activeItem.offsetWidth}px`,
        left: `${activeItem.offsetLeft}px`
      });
    } else {
      // no previous item found — reset background
      setBgStyle({ width: 0, left: 0 });
    }
  };

  return (
    <nav>
      <div className="navbar" ref={navRef}>
        <NavLink
          to="/"
          className={({ isActive }) => `nav-item ${isActive ? "active" : ""}`}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          K
          <span className="highlight">evin Z.</span>
        </NavLink>
        <NavLink
          to="/experience"
          className={({ isActive }) => `nav-item ${isActive ? "active" : ""}`}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <FontAwesomeIcon icon={faTimeline} />
          <span className="highlight">{" "}Experience</span>
        </NavLink>
        <NavLink
          to="/projects"
          className={({ isActive }) => `nav-item ${isActive ? "active" : ""}`}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <FontAwesomeIcon icon={faCubes} />
          <span className="highlight">{" "}Projects</span>
        </NavLink>
        <NavLink
          to="/connect"
          className={({ isActive }) => `nav-item ${isActive ? "active" : ""}`}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <FontAwesomeIcon icon={faLink} />
          <span className="highlight">{" "}Connect</span>
        </NavLink>
        <div className="nav-bg" style={bgStyle}></div>
      </div>
    </nav>
  );
}