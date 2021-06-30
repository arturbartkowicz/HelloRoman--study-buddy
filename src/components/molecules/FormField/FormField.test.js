import React from 'react';
import { screen, fireEvent } from '@testing-library/react';
import FormField from './FormField';
import renderWithThemeProvider from 'helpers/renderWithTeamProvider';

describe('Form Field', () => {
  it('Renders the component', () => {
    renderWithThemeProvider(<FormField label="name" name="name" id="name" />);
  });
});
