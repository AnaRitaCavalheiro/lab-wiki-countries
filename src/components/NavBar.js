import React from 'react';
import { NavLink } from 'react-router-dom';

function NavBar() {
  return (
    <nav>
      <h1>Lab-WikiCountires</h1>
      <NavLink activeStyle={{ color: 'pink' }} to="/countrieslist">
        Countries
      </NavLink>
    </nav>
  );
}
export default NavBar;
