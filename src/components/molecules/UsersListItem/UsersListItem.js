import React from 'react';
import PropTypes from 'prop-types';
import Average from 'components/atoms/Average/Average';
import DeleteButton from 'components/atoms/DeleteButton/DeleteButton';
import Label from 'components/atoms/Label/Label';
import { Wrapper } from './UsersListItem.styles';

const UsersListItem = ({ deleteUser, userData: { average, name, attendance = '0%' } }) => (
  <Wrapper>
    <Average average={average} />
    <Label name={name} attendance={attendance} />
    <DeleteButton onClick={() => deleteUser(name)} />
  </Wrapper>
);

UsersListItem.propTypes = {
  userData: PropTypes.shape({
    average: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    attendance: PropTypes.string,
  }),
};

export default UsersListItem;
