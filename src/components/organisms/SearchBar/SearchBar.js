import React, { useState, useEffect } from 'react';
import { Input } from 'components/atoms/Input/Input';
import { SearchBarWrapper, SearchResults, SearchResultListItem, SearchWrapper, StatusInfo } from './SearchBar.styles';
import { useCombobox } from 'downshift';
import debounce from 'lodash.debounce';
import { useStudents } from '../../../hooks/useStudents';

const SearchBar = () => {
  const [matchingStudents, setMatchingStudents] = useState([]);
  const { findStudents } = useStudents();

  const getMatchingStudents = debounce(async ({ inputValue }) => {
    const { students } = await findStudents(inputValue);
    setMatchingStudents(students);
  }, 500);

  const { isOpen, getToggleButtonProps, getLabelProps, getMenuProps, getInputProps, getComboboxProps, highlightedIndex, getItemProps } = useCombobox({
    items: matchingStudents,
    onInputValueChange: getMatchingStudents,
  });

  return (
    <SearchBarWrapper>
      <StatusInfo>
        <p>Logged as:</p>
        <p>
          <strong>Teacher</strong>
        </p>
      </StatusInfo>
      <SearchWrapper {...getComboboxProps()}>
        <Input {...getInputProps()} name="search" id="search" />
        <SearchResults {...getMenuProps()}>
          {isOpen &&
            matchingStudents.map((item, index) => (
              <SearchResultListItem {...getItemProps({ item, index })} key={item.id}>
                {item.name}
              </SearchResultListItem>
            ))}
        </SearchResults>
      </SearchWrapper>
    </SearchBarWrapper>
  );
};

export default SearchBar;
