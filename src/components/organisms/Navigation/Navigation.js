import React from 'react';
import { Logo, StyledLink, Wrapper } from 'components/organisms/Navigation/Navigation.styles';

const Navigation = () => {
  return (
    <Wrapper>
      <Logo>
        <h1>
          Study
          <br />
          Buddy
        </h1>
      </Logo>
      <StyledLink to="/group">Dashboard</StyledLink>
      <StyledLink to="/add-user">Add user</StyledLink>
      <StyledLink to="/add-user-empty">Settings</StyledLink>
      <StyledLink to="/add-user-empty">Logout</StyledLink>
    </Wrapper>
  );
};

export default Navigation;
