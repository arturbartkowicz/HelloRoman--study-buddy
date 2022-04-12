import { useState, useEffect } from 'react';
import axios from 'axios';

export const useStudents = ({ groupId = '' } = {}) => {
  const [students, setStudents] = useState([]);
  const [groups, setGroups] = useState([]);

  useEffect(() => {
    axios
      .get('/groups')
      .then(({ data }) => setGroups(data.groups))
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    if (!groupId) return;
    axios
      .get(`/students/${groupId}`)
      .then(({ data }) => setStudents(data.students))
      .catch((err) => console.log(err));
  }, [groupId]);

  return {
    students,
    groups,
  };
};
