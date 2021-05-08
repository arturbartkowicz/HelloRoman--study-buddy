import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Average from 'components/atoms/Average/Average';
import Button from 'components/atoms/Button/Button';

const Wrapper = styled.li`
  display: flex;
  align-items: center;
  position: relative;
  &:not(:last-child)::after {
    content: '';
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 1px;
    background-color: lightgrey;
  }
`;

const UsersListItem = ({ userData: { average, name, attendance } }) => (
  <Wrapper>
    <Average average={average} />
    <div>
      <p>{name}</p>
      <p>attendance: {attendance}%</p>
    </div>
    <Button />
  </Wrapper>
);

UsersListItem.propTypes = {
  userData: PropTypes.shape({
    average: PropTypes.string,
    name: PropTypes.string.isRequired,
    attendance: PropTypes.string,
  }),
};

export default UsersListItem;
