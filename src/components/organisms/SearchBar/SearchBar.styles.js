import { Input } from 'components/atoms/Input/Input';
import styled from 'styled-components';

export const SearchBarWrapper = styled.div`
  grid-row: 1 / 2;
  grid-column: 2 / 3;
  border-bottom: 1px solid ${({ theme }) => theme.colors.darkPurple};
  height: 90px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 0 40px;
  position: relative;

  ${Input} {
    font-size: ${({ theme }) => theme.fontSize.xl};
    width: 100%;
    max-width: 350px;
    border: none;
  }
`;

export const StatusInfo = styled.div`
  color: ${({ theme }) => theme.colors.darkGrey};
  font-size: ${({ theme }) => theme.fontSize.l};

  p {
    margin: 5px;
    margin-right: 40px;
  }
`;

export const ListItem = styled.li`
  display: flex;
  align-items: center;
  position: relative;
  height: 30px;
  &:not(:last-child)::after {
    content: '';
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 1px;
    background-color: lightgrey;
  }
`;

export const SearchWrapper = styled.div`
  position: relative;
`;

export const SearchResults = styled.ul`
  visibility: ${({ isVisible }) => (isVisible ? 'visible' : 'hidden')};
  z-index: 1000;
  max-height: 500px;
  overflow-y: scroll;
  padding: 10px;
  border-radius: 15px;
  list-style: none;
  width: 100%;
  position: absolute;
  left: 0;
  top: 30px;
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors.white};
`;

export const SearchResultListItem = styled.li`
  font-weight: bold;
  color: ${({ theme }) => theme.colors.darkGrey};
  background-color: ${({ theme, isHighlited }) => (isHighlited ? theme.colors.lightPurple : theme.colors.white)};
  width: 100%;
  padding: 20px 5px;

  &:hover {
    background-color: ${({ theme }) => theme.colors.lightPurple};
  }
  &:not(:last-child) {
    border-bottom: 1px solid ${({ theme }) => theme.colors.darkPurple};
  }
`;
