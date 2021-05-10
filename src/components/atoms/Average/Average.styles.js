import styled from 'styled-components';

export const Wrapper = styled.div`
  background-color: ${({ theme, children }) => {
    if (children <= 2) {
      return theme.colors.error;
    } else if (children > 2 && children <= 3) {
      return theme.colors.warning;
    } else {
      return theme.colors.success;
    }
  }};
  padding: 10px;
  border-radius: 50px;
  width: 35px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: ${({ theme }) => theme.fontSize.m};
`;
