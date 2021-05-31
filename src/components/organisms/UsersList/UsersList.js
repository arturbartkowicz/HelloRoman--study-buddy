import React from 'react';
import UsersListItem from 'components/molecules/UsersListItem/UsersListItem';
import { Wrapper, StyledList } from './UsersList.styles.js';

// Komponent Funkcyjny

const UsersList = ({ users, deleteUser }) => {
  return (
    <Wrapper>
      <StyledList>
        {users.map((userData, i) => (
          <UsersListItem deleteUser={deleteUser} index={i} userData={userData} />
        ))}
      </StyledList>
    </Wrapper>
  );
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
