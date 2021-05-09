import React from 'react';
import styled from 'styled-components';

const StyledWrapper = styled.div`
  width: 200px;
  padding-left: 10px;
`;

const StyledName = styled.p`
  font-size: ${({ theme }) => theme.fontSize.l};
  margin-bottom: 0;
`;

const StyledAttendance = styled.p`
  font-size: ${({ theme }) => theme.fontSize.s};
  margin-top: 0;
  margin-bottom: 10px;
`;

const Label = ({ name, attendance }) => (
  <StyledWrapper>
    <StyledName>{name}</StyledName>
    <StyledAttendance>attendance: {attendance}%</StyledAttendance>
  </StyledWrapper>
);

export default Label;
