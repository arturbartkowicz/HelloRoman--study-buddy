import React from 'react';
import PropTypes from 'prop-types';
import Average from 'components/atoms/Average/Average';
import Button from 'components/atoms/Button/Button';
import Label from 'components/atoms/Label/Label';
import { Wrapper } from './UsersListItem.styles';

const UsersListItem = ({ userData: { average, name, attendance } }) => (
  <Wrapper>
    <Average average={average} />
    <Label name={name} attendance={attendance} />
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
