import React from 'react';
import { render } from '@testing-library/react';

import BoxAlert from '../../components/BoxAlert';

describe('BoxAlert Component', () => {
  it('should be able to load with children node', () => {
    const { getByText } = render(
      <BoxAlert>
        <span>Test</span>
      </BoxAlert>,
    );

    expect(getByText('Test')).toBeTruthy();
  });
});
