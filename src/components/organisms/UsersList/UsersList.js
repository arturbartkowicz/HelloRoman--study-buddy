import React, { useState, useEffect } from 'react';
import { users as userData } from 'data/users';
import UsersListItem from 'components/molecules/UsersListItem/UsersListItem';
import { Wrapper, StyledList } from './UsersList.styles.js';
import FormField from '../../molecules/FormField/FormField';

const mockAPI = (success) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (userData) {
        resolve([...userData]);
      } else {
        reject({ message: 'Error' });
      }
    }, 2000);
  });
};

// Komponent Funkcyjny

const UsersList = () => {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    mockAPI().then((data) => {
      setUsers(data);
      setIsLoading(false);
    });
  }, []);

  const deleteUser = (name) => {
    const filteredUsers = users.filter((user) => user.name !== name);
    setUsers(filteredUsers);
  };

  return (
    <>
      <Wrapper>
        <FormField label="Name" id="name" name="name" />
      </Wrapper>
      <Wrapper>
        <h1>{isLoading ? 'Loading...' : 'Users list'}</h1>
        <StyledList>
          {users.map((userData, i) => (
            <UsersListItem deleteUser={deleteUser} index={i} userData={userData} />
          ))}
        </StyledList>
      </Wrapper>
    </>
  );
};

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

export default UsersList;
