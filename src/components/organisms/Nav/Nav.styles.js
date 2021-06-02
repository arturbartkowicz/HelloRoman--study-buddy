import styled from 'styled-components';

export const Wrapper = styled.nav`
  display: flex;
  flex-direction: column;
  width: 110px;
  border: 1px solid ${({ theme }) => theme.colors.grey};
`;

export const Header = styled.h4`
  color: ${({ theme }) => theme.colors.white};
  width: 100%;
  height: 60px;
  background-color: ${({ theme }) => theme.colors.darkGrey};
  text-align: right;
  display: flex;
  align-items: center;
  padding-right: 10px;
`;

export const LinkWrapper = styled.p`
  color: ${({ theme }) => theme.colors.darkGrey};
  font-size: ${({ theme }) => theme.fontSize.m};
  font-weight: 700;
  text-align: right;
  margin-right: 15px;
`;
