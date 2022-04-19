import React, { useState, useEffect } from 'react';
import { Input } from 'components/atoms/Input/Input';
import { SearchBarWrapper, StatusInfo, List, ListItem } from './SearchBar.styles';
import axios from 'axios';

const SearchBar = () => {
  const [students, setStudents] = useState([]);
  const [filterStudents, setFilterStudents] = useState(students);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    axios
      .get('/students')
      .then(({ data }) => {
        setStudents(data.students);
      })
      .catch((err) => console.log(err));
  }, []);

  const handleSearch = (e) => {
    setIsOpen(true);
    const filterStudents = students.filter((user) => user.name.toLowerCase().includes(e.target.value));
    setFilterStudents(filterStudents);
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
          {filterStudents.map((student) => {
            return <ListItem key={student.id}>{student.name}</ListItem>;
          })}
        </List>
      )}
    </SearchBarWrapper>
  );
};

export default SearchBar;
