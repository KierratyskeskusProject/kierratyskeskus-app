import React from 'react';
import { Link } from 'react-router-dom';

const Header = ({
  title,
  route,
  routeTitle,
  handleClick,
}) => (
  <div className="header row">
    <div className="headerLeft col-4">
      <h1>{title}</h1>
      {/* Page title */}
    </div>
    <div className="headerMiddle col-4" />
    {/* Spacing */}
    <div className="headerRight col-4">
      <Link to={route}>
        <button
          type="submit"
          className="btn"
          onClick={handleClick}
        >
          {routeTitle}
        </button>
      </Link>
    </div>
  </div>
);

export default Header;
