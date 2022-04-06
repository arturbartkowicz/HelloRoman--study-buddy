import React from 'react';
import { screen } from '@testing-library/react';
import { renderWithProviders } from 'helpers/renderWithProviders';
import MockAdapter from 'axios-mock-adapter';
import axios from 'axios';
import NewsSection from './NewsSection';

const mock = new MockAdapter(axios);

const query = `
{ allArticles {
    id
    title
    content
    image {
      id
      url
    }
  }
} `;

describe('News Section', () => {
  afterEach(() => {
    mock.reset();
  });

  it('Displays error when article are no loaded', async () => {
    mock.onPost('https://graphql.datocms.com/', { query }).reply(500);
    renderWithProviders(<NewsSection />);
    await screen.findByText(/Sorry/);
  });

  // it('Displays the articles', async () => {
  //   mock.onPost('https://graphql.datocms.com/', { query }).reply(200, {
  //     data: {
  //       allArticles: [{ id: 1, title: 'Test', category: 'Test', content: 'Test' }],
  //     },
  //   });
  //   renderWithProviders(<NewsSection />);
  //   await screen.findAllByText(/Test/);
  // });
});
