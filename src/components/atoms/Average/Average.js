import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.error};
  padding: 10px;
  border-radius: 50px;
  width: 35px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: ${({ theme }) => theme.fontSize.m};
`;

const Average = ({ average }) => <Wrapper>{average}</Wrapper>;

export default Average;
