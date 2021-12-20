import React from 'react';
import JSONTree from 'react-json-tree';
import { theme } from './light-theme';

export const LightThemeValues = () => {
  return (
    <div data-testid="light-theme">
      <JSONTree data={theme} />
    </div>
  );
};
