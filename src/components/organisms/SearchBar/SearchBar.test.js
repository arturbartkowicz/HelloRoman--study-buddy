import { render } from '../../../views/test-utils';
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
  });
});
