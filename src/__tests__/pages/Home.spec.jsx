import React from 'react';
import { render, fireEvent } from '@testing-library/react';

import Home from '../../pages/Home';

const mockedHistoryPush = jest.fn();

jest.mock('react-router-dom', () => {
  return {
    useHistory: () => ({
      push: mockedHistoryPush,
    }),
  };
});

describe('Home Page', () => {
  it('should be able to search a movie', () => {
    const { getByTestId } = render(<Home />);

    const searchForm = getByTestId('searchForm');
    const searchField = getByTestId('searchInput');

    const term = 'shadows';

    fireEvent.change(searchField, { target: { value: term } });

    fireEvent.submit(searchForm);

    expect(mockedHistoryPush).toHaveBeenCalledWith(`/search/${term}/1`);
  });
});
