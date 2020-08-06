import React from 'react';
import { render } from '@testing-library/react';

import BottomBar from '../../components/BottomBar';

jest.mock('react-router-dom', () => {
  return {
    NavLink: 'a',
  };
});

describe('BottomBar Component', () => {
  it('should be able to load', () => {
    const { getByTestId } = render(<BottomBar />);

    const homeLink = getByTestId('homeLink');
    const favouritesLink = getByTestId('favouritesLink');

    expect(homeLink).toBeTruthy();
    expect(favouritesLink).toBeTruthy();
  });
});
