import React from 'react';
import '@testing-library/jest-dom';
import AddUser from './AddUser';
import Dashboard from './Dashboard';
import { screen, fireEvent } from '@testing-library/react';
import { renderWithProviders } from 'helpers/renderWithProviders';

describe('Input with value', () => {
  // it('Adds a new user to the list', () => {
  //   renderWithProviders(
  //     <>
  //       <AddUser />
  //       <Dashboard />
  //     </>
  //   );
  //   fireEvent.change(screen.getByTestId('Name'), { target: { value: 'Dariuszek' } });
  //   fireEvent.change(screen.getByTestId('Attendance'), { target: { value: '55%' } });
  //   fireEvent.change(screen.getByTestId('Average'), { target: { value: '4.4' } });
  //   fireEvent.click(screen.getByTestId('Consent'));
  //   fireEvent.click(screen.getByText('Add'));
  //   screen.getByText('Dariuszek');
  // });
  // it('Prevents adding new user if the consent is not checked', () => {
  //   renderWithProviders(
  //     <>
  //       <AddUser />
  //       <Dashboard />
  //     </>
  //   );
  //   fireEvent.change(screen.getByTestId('Name'), { target: { value: 'Packer' } });
  //   fireEvent.change(screen.getByTestId('Attendance'), { target: { value: '55%' } });
  //   fireEvent.change(screen.getByTestId('Average'), { target: { value: '4.4' } });
  //   fireEvent.click(screen.getByText('Add'));
  //   const newUser = screen.queryByText('Packer');
  //   expect(newUser).not.toBeInTheDocument();
  // });
});
