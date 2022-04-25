import { useCallback } from 'react';
import axios from 'axios';

export const useStudents = () => {
  const getGroups = useCallback(async () => {
    try {
      const result = await axios.get('/groups');
      return result.data.groups;
    } catch (e) {
      console.log(e);
    }
  }, []);

  // Ponisza funkcja robi prawie to samo co getGroups.
  // getGroups zwraca result, a ponisza ustawiała stan.
  // Zwróć uwagę na zapisy i wykorzystanie promis i async await
  // useEffect(() => {
  //   axios
  //     .get('/groups')
  //     .then(({ data }) => setGroups(data.groups))
  //     .catch((err) => console.log(err));
  // }, []);

  const getStudents = useCallback(async (groupId) => {
    try {
      const result = await axios.get(`/students/${groupId}`);
      return result.data.students;
    } catch (e) {
      console.log(e);
    }
  }, []);

  const findStudents = async (searchPhrase) => {
    try {
      const { data } = await axios.post(`/students/search`, { searchPhrase });
      return data;
    } catch (e) {
      console.log(e);
    }
  };

  return {
    getGroups,
    getStudents,
    findStudents,
  };
};
