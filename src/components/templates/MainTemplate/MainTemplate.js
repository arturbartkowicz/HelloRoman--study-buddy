import React from 'react';
import styled from 'styled-components';
import Navigation from 'components/organisms/Navigation/Navigation';
import SearchBar from 'components/organisms/SearchBar/SearchBar';
import { Wrapper } from 'components/templates/MainTemplate/MainTemplate.styles';

const MainTemplate = ({ children }) => {
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
      <News />
    </Wrapper>
  );
};

export default MainTemplate;
