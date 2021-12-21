import { render } from '@testing-library/react';
import { expect } from 'chai';
import React from 'react';
import { WelcomePage } from './welcome.composition';

describe('views/welcome', () => {
  it('should render successfully', () => {
    const { getByTestId } = render(<WelcomePage />);
    const res = getByTestId('welcome');
    expect(res).to.be.instanceOf(HTMLElement);
  });
});
