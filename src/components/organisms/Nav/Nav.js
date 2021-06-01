import React from 'react';
import { Link } from 'react-router-dom';
import { Wrapper } from './Nav.styles.js';

const Nav = () => {
  return (
    <Wrapper>
      <Link to="/">Home</Link>
      <Link to="/add-user">Add user</Link>
    </Wrapper>
  );
};

export default Nav;
