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

export const List = styled.ul`
  color: ${({ theme }) => theme.colors.darkGrey};
  font-size: ${({ theme }) => theme.fontSize.l};
  background-color: ${({ theme }) => theme.colors.white};
  position: relative;
  top: 320px;
  right: 200px;
  z-index: 10;
  padding: 20px;
  margin: 0;
  border-radius: 10px;
  list-style-type: none;
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
