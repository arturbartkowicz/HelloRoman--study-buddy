import styled from 'styled-components';

export const Wrapper = styled.div`
  grid-row: 1 / 3;
  grid-column: 3 / 3;
  border-left: 1px solid ${({ theme }) => theme.colors.darkPurple};
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const NewsSectionHeader = styled.h2`
  margin-left: 25px;
  margin-right: auto;
  color: ${({ theme }) => theme.colors.darkGrey};
`;
