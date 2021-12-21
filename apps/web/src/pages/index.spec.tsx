import { render } from '@testing-library/react';
import { expect } from 'chai';
import React from 'react';
import Index from './index';

describe('Index', () => {
  it('should render successfully', () => {
    const { getByText } = render(<Index />);
    expect(getByText(/Welcome to waweb!/gi)).to.be.instanceOf(HTMLElement);
  });
});
