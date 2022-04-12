import styled from 'styled-components';

export const Title = styled.h1`
  font-size: ${({ theme }) => theme.fontSize.xl};
  color: ${({ theme }) => theme.colors.darkGrey};
`;

export const TitleWrapper = styled.div`
  margin-left: 25px;
  display: flex;
  align-items: center;
`;
