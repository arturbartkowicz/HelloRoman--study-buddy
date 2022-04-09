import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { ViewWrapper } from 'components/molecules/ViewWrapper/ViewWrapper';
import { useParams } from 'react-router-dom';
import UsersList from 'components/organisms/UsersList/UsersList';

const Dashboard = () => {
  const [students, setStudentss] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`/students/${id}`)
      .then(({ data }) => setStudentss(data.students))
      .catch((err) => console.log(err));
  }, []);

  return (
    <ViewWrapper>
      <UsersList users={students} />
    </ViewWrapper>
  );
};

export default Dashboard;
