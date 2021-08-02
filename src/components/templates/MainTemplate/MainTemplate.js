import React from 'react';
import styled from 'styled-components';
import Navigation from 'components/organisms/Navigation/Navigation';
import { Wrapper } from 'components/templates/MainTemplate/MainTemplate.styles';

const MainTemplate = ({ children }) => {
  const SearchBar = styled.div`
    grid-row: 1 / 2;
    grid-column: 2 / 3;
    border-bottom: 1px solid ${({ theme }) => theme.colors.darkPurple};
    height: 90px;
  `;

  const News = styled.div`
    grid-row: 1 / 3;
    grid-column: 3 / 3;
    border-left: 1px solid ${({ theme }) => theme.colors.darkPurple};
  `;

  return (
    <Wrapper>
      <Navigation />
      <SearchBar />
      {children}
      <SearchBar />
      <News />
    </Wrapper>
  );
};

export default MainTemplate;
