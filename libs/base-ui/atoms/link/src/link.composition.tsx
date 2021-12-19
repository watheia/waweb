import React from 'react';
import { Link } from './link';

export const LinkExample = () => (
  <Link href="https://google.com" data-testid="test-link">
    look it up!
  </Link>
);

export const LinkWithExternal = () => (
  <Link href="https://google.com" external data-testid="test-link">
    look it up!
  </Link>
);
