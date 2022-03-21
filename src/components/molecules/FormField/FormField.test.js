import React, { useState } from 'react';
import { screen, fireEvent, render } from '@testing-library/react';
import FormField from './FormField';
import renderWithThemeProvider from 'helpers/renderWithTeamProvider';

const InputWithButton = () => {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <>
      <input value={inputValue} onChange={handleInputChange} name="Name" id="name" placeholder="Siemano" />
      <button disabled={!inputValue}>Submit</button>
    </>
  );
};

describe('Input with value', () => {
  it('Renders the component', () => {
    render(<InputWithButton />);
    screen.getByText('Submit');
  });

  it('Properly handles value change', () => {
    render(<InputWithButton />);
    const input = screen.getByPlaceholderText('Siemano');
    fireEvent.change(input, { target: { value: 'Roman' } });
    expect(input).toHaveValue('Roman');
  });
});
