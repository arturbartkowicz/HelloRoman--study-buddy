import { render, screen, fireEvent } from '../../../views/test-utils';
import { setupServer } from 'msw/node';
import { handlers } from '../../../mocks/handlers/index';
import SearchBar from './SearchBar';
import { renderWithProviders } from 'helpers/renderWithProviders';

//Tworzymy server w którym
const server = setupServer(...handlers);
// Describe the requests to mock.

describe('Search Bar', () => {
  beforeAll(() => server.listen());
  afterEach(() => server.resetHandlers());
  afterAll(() => server.close());

  it('Rrender the component', () => {
    render(<SearchBar />);
    screen.getByText('Teacher');
    screen.getByPlaceholderText('Search');
  });

  it('Displays users when search phrase is matching', async () => {
    render(<SearchBar />);
    const input = screen.getByPlaceholderText('Search');
    fireEvent.change(input, { target: { value: 'ad' } });

    await screen.findAllByText(/Adam Romański/);
  });

  // dopisz test, kiedy usuniemy rzeczy z search bara to czy nasza lista znika
});
