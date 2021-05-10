import styled from 'styled-components';

export const StyledWrapper = styled.div`
  width: 200px;
  padding-left: 10px;
`;

export const StyledName = styled.p`
  font-size: ${({ theme }) => theme.fontSize.l};
  margin-bottom: 0;
`;

export const StyledAttendance = styled.p`
  font-size: ${({ theme }) => theme.fontSize.s};
  margin-top: 0;
  margin-bottom: 10px;
`;
