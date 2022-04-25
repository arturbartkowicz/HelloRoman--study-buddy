import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useStudents } from 'hooks/useStudents';
import UsersListItem from 'components/molecules/UsersListItem/UsersListItem';
import { StyledList } from './StudentsList.styles';
import { Title } from 'components/atoms/Title/Title';

const StudentsList = () => {
  const [students, setStudents] = useState([]);
  const { id } = useParams();
  const { getStudents } = useStudents();

  useEffect(() => {
    (async () => {
      const students = await getStudents(id);
      setStudents(students);
    })();
  }, [getStudents, id]);

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

export default StudentsList;
