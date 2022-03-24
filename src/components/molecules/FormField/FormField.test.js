import React from 'react';
import FormField from './FormField';
import { renderWithThemeProvider } from 'helpers/renderWithTeamProvider';

describe('Input with value', () => {
  it('Renders the component', () => {
    renderWithThemeProvider(<FormField label="name" name="name" id="name" />);
  });
});
