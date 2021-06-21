import React, { useState } from 'react';
import { render, screen } from '@testing-library/react';

const InputWithButton = () => {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (e) => setInputValue(e.target.value);

  return (
    <>
      <input value={inputValue} onChange={handleInputChange} name="Name" id="name" placeholder="Enter your name" />
      <button disabled={!inputValue}>Submit</button>
    </>
  );
};

describe('Input with button', () => {
  it('Renders the component', () => {
    render(<InputWithButton />);
    screen.getByText('Submit');
  });
});
