import React from 'react';
import FormField from './AddUser';
import { renderWithProviders } from 'helpers/renderWithProviders';

describe('Input with value', () => {
  it('Renders the component', () => {
    renderWithProviders(<FormField label="name" name="name" id="name" />);
  });
});
