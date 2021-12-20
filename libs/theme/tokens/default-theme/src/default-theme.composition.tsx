import React from 'react';
import JSONTree from 'react-json-tree';
import { theme } from './default-theme';

export const DefaultThemeValues = () => {
  return (
    <div data-testid="default-theme">
      <JSONTree data={theme} />
    </div>
  );
};
