import React from 'react';
import PropTypes from 'prop-types';
import UsersListItem from 'components/molecules/UsersListItem/UsersListItem';
import { StyledList } from './UsersList.styles';
import { UserShape } from 'types';
import { Title } from 'components/atoms/Title/Title';

const UsersList = ({ users, deleteUser }) => {
  return (
    <>
      <Title>Students list</Title>
      <StyledList>
        {users.map((userData) => (
          <UsersListItem deleteUser={deleteUser} key={userData.name} userData={userData} />
        ))}
      </StyledList>
    </>
  );
};

UsersList.propTypes = {
  users: PropTypes.arrayOf(PropTypes.shape(UserShape)),
  deleteUser: PropTypes.func,
};

export default UsersList;

// Komponent klasowy
// class UsersList extends React.Component {
//   state = {
//     users: [],
//     isLoading: false,
//   };

//   componentDidMount() {
//     this.setState({ isLoading: true });
//     mockAPI().then( (data) => {
//       this.setState({ users: data });
//       this.setState({ isLoading: false });
//     });
//   }

//   deleteUsers = (name) => {
//     const filteredName = this.state.users.filter((users) => users.name !== name);
//     this.setState({ users: filteredName });
//   };

//   render() {
//     return (
//       <Wrapper>
//         <h1>{this.state.isLoading ? 'Loading...' : 'Users List'}</h1>
//         <StyledList>
//           {this.state.users.map((userData, i) => (
//             <UsersListItem deleteUser={this.deleteUsers} index={i} userData={userData} />
//           ))}
//         </StyledList>
//       </Wrapper>
//     );
//   }
// }
