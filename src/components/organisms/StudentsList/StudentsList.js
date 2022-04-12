import React from 'react';
import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';
import { useStudents } from 'hooks/useStudents';
import UsersListItem from 'components/molecules/UsersListItem/UsersListItem';
import { StyledList } from './StudentsList.styles';
import { UserShape } from 'types';
import { Title } from 'components/atoms/Title/Title';

const StudentsList = () => {
  const { id } = useParams();
  const { students } = useStudents({ groupId: id });
  return (
    <>
      <Title>Students list</Title>
      <StyledList>
        {students.map((userData) => (
          <UsersListItem key={userData.name} userData={userData} />
        ))}
      </StyledList>
    </>
  );
};

StudentsList.propTypes = {
  users: PropTypes.arrayOf(PropTypes.shape(UserShape)),
  deleteUser: PropTypes.func,
};

export default StudentsList;
