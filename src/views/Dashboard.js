import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { useStudents } from 'hooks/useStudents';
import { GroupWrapper, TitleWrapper, Wrapper } from 'views/Dashboard.styles';
import { Title } from 'components/atoms/Title/Title';
import StudentsList from 'components/organisms/StudentsList/StudentsList';

const Dashboard = () => {
  const { id } = useParams();
  const { groups } = useStudents();

  if (!id && groups.length > 0) return <Redirect to={`/group/${groups[0]}`} />;

  return (
    <Wrapper>
      <TitleWrapper>
        <Title>{`Group ${id}`}</Title>
        <nav>
          {groups.map((group) => {
            return (
              <Link key={group} to={`/group/${group}`}>
                {group}
              </Link>
            );
          })}
        </nav>
      </TitleWrapper>
      <GroupWrapper>
        <StudentsList />
      </GroupWrapper>
    </Wrapper>
  );
};

export default Dashboard;
