import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { ViewWrapper } from 'components/molecules/ViewWrapper/ViewWrapper';
import { useParams } from 'react-router-dom';
import UsersList from 'components/organisms/UsersList/UsersList';

const Dashboard = () => {
  const [students, setStudentss] = useState([]);
  const [groups, setGroups] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    axios
      .get('/groups')
      .then(({ data }) => setGroups(data.groups))
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    axios
      .get(`/students/${id || groups[0]}`)
      .then(({ data }) => setStudentss(data.students))
      .catch((err) => console.log(err));
  }, [id, groups]);

  return (
    <ViewWrapper>
      <nav>
        {groups.map((group) => {
          return (
            <Link key={group} to={`/group/${group}`}>
              {group}
            </Link>
          );
        })}
      </nav>
      <UsersList users={students} />
    </ViewWrapper>
  );
};

export default Dashboard;
