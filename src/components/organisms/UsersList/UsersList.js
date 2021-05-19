import React from 'react';
import { users } from 'data/users';
import UsersListItem from 'components/molecules/UsersListItem/UsersListItem';
import { Wrapper, StyledList } from './UsersList.styles.js';

class UsersList extends React.Component {
  state = {
    users,
  };

  deleteUsers = (name) => {
    const filteredName = this.state.users.filter((users) => users.name !== name);
    this.setState({ users: filteredName });
  };

  render() {
    return (
      <Wrapper>
        <StyledList>
          {this.state.users.map((userData, i) => (
            <UsersListItem deleteUser={this.deleteUsers} index={i} userData={userData} />
          ))}
        </StyledList>
      </Wrapper>
    );
  }
}

export default UsersList;
