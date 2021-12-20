import React from 'react';
import JSONTree from 'react-json-tree';
import { theme } from './dark-theme';

export const DarkThemeValues = () => {
  return (
    <div data-testid="dark-theme">
      <JSONTree data={theme} />
    </div>
  );
};
