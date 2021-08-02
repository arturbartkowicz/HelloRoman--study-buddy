import React from 'react';
import styled from 'styled-components';
import Navigation from 'components/organisms/Navigation/Navigation';
import { Wrapper } from 'components/templates/MainTemplate/MainTemplate.styles';

const MainTemplate = ({ children }) => {
  const SearchBarWrapper = styled.div`
    grid-row: 1 / 2;
    grid-column: 2 / 3;
    border-bottom: 1px solid ${({ theme }) => theme.colors.darkPurple};
    height: 90px;
  `;

  const StatusInfo = styled.div`
    color: ${({ theme }) => theme.colors.darkGrey};
    font-size: ${({ theme }) => theme.fontSize.l};
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding: 0 40px;
  `;

  const SearchBar = () => (
    <SearchBarWrapper>
      <StatusInfo>
        <p>Logged as:</p>
        <p>
          <strong>Teacher</strong>
        </p>
      </StatusInfo>
      <input type="text" />
    </SearchBarWrapper>
  );

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
