import React from 'react';
import { Wrapper, Logo, StyledLink } from './Navigation.styles.js';

const Navigation = () => {
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

export default Navigation;
