import React from 'react';
import { users } from 'data/users';
import UsersListItem from 'components/molecules/UsersListItem/UsersListItem';
import { Wrapper, StyledList } from './UsersList.styles.js';

class UsersList extends React.Component {
  state = {
    isUsersList: false,
  };

  render() {
    return (
      <Wrapper>
        <h1>{this.state.isUsersList ? 'Users List' : 'Students List'}</h1>
        <StyledList>
          {users.map((userData, i) => (
            <UsersListItem index={i} userData={userData} />
          ))}
        </StyledList>
      </Wrapper>
    );
  }
}

export default UsersList;
