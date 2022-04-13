import React, { useState, useEffect } from 'react';
import { Input } from 'components/atoms/Input/Input';
import { SearchBarWrapper, StatusInfo, List } from './SearchBar.styles';
import axios from 'axios';

const SearchBar = () => {
  const [students, setStudents] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  console.log(students);
  useEffect(() => {
    axios
      .get('/students')
      .then(({ data }) => setStudents(data.students))
      .catch((err) => console.log(err));
  }, []);

  const handleSearch = () => {
    setIsOpen(true);
  };

  return (
    <SearchBarWrapper>
      <StatusInfo>
        <p>Logged as:</p>
        <p>
          <strong>Teacher</strong>
        </p>
      </StatusInfo>
      <Input type="text" onChange={handleSearch} />
      {isOpen && (
        <List>
          {students.map((student) => {
            return <li key={student.id}>{student.name}</li>;
          })}
        </List>
      )}
    </SearchBarWrapper>
  );
};

export default SearchBar;
