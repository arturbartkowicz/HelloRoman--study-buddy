import React from 'react';
import { Link } from 'react-router-dom';
import { Wrapper, Logo, StyledLink } from './Nav.styles.js';

const Nav = () => {
  return (
    <Wrapper>
      <Logo>Study Buddy</Logo>
      <StyledLink to="/">Dashboard</StyledLink>
      <StyledLink to="/add-user">Add user</StyledLink>
      <StyledLink>Settings</StyledLink>
      <StyledLink>Logout</StyledLink>
    </Wrapper>
  );
};

export default Nav;
