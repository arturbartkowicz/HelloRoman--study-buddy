import React from 'react';
import { Link } from 'react-router-dom';
import { Wrapper, Header, LinkWrapper } from './Nav.styles.js';

const Nav = () => {
  return (
    <Wrapper>
      <Header>Study Buddy</Header>
      <Link to="/">
        <LinkWrapper>Dashboard</LinkWrapper>
      </Link>
      <Link to="/add-user">
        <LinkWrapper>Add user</LinkWrapper>
      </Link>
      <Link>
        <LinkWrapper>Settings</LinkWrapper>
      </Link>
      <Link>
        <LinkWrapper>Logout</LinkWrapper>
      </Link>
    </Wrapper>
  );
};

export default Nav;
