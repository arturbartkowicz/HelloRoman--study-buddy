import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Wrapper = styled.nav`
  display: flex;
  flex-direction: column;
  width: 110px;
  border: 1px solid ${({ theme }) => theme.colors.grey};
`;

export const Logo = styled.h4`
  color: ${({ theme }) => theme.colors.white};
  width: 100%;
  height: 60px;
  background-color: ${({ theme }) => theme.colors.darkGrey};
  text-align: right;
  display: flex;
  align-items: center;
  padding-right: 10px;
`;

export const StyledLink = styled(Link)`
  font-weight: bold;
  text-decoration: none;
  color: ${({ theme }) => theme.colors.darkGrey};
  font-size: ${({ theme }) => theme.fontSize.m};
  text-align: right;
  margin: 15px 20px 15px auto;
`;
