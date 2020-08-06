import React from 'react';
import { render } from '@testing-library/react';

import Loading from '../../components/Loading';

describe('Loading Component', () => {
  it('should be able to load with another text', () => {
    const { getByText } = render(<Loading text="Loading more..." />);

    expect(getByText('Loading more...')).toBeTruthy();
  });

  it('should be able to load with default text and without props passed', () => {
    const { getByText } = render(<Loading />);

    expect(getByText('Loading...')).toBeTruthy();
  });
});
