import React from 'react';
import { StyledWrapper, StyledName, StyledAttendance } from './Label.styles';

const Label = ({ name, attendance }) => (
  <StyledWrapper>
    <StyledName>{name}</StyledName>
    <StyledAttendance>attendance: {attendance}%</StyledAttendance>
  </StyledWrapper>
);

export default Label;
