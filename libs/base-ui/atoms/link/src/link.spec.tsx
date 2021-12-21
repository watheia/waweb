import { render } from '@testing-library/react';
import { expect } from 'chai';
import React from 'react';
import { LinkExample, LinkWithExternal } from './link.composition';

it('should render correctly', () => {
  const { getByTestId } = render(<LinkExample />);
  const rendered = getByTestId('test-link');
  expect(rendered).to.be.instanceOf(HTMLElement);
});
it('should render with target blank', () => {
  const { getByTestId } = render(<LinkWithExternal />);
  const rendered = getByTestId('test-link');

  expect(rendered.tagName).to.equal('A');
  expect(rendered.getAttribute('target')).to.equal('_blank');
});
