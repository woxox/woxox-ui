import type { Preview } from '@storybook/react';
import React, { useEffect, useState } from 'react';

import {
  baseTokenClass,
  darkThemeClass,
  lightThemeClass,
} from '@woxox/ui';

import './reset.css';

const preview: Preview = {
  parameters: {
    class: darkThemeClass,
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export const decorators = [
  (Story, context) => {
    const [dark, setDark] = useState<boolean>(
      window.matchMedia('(prefers-color-scheme: dark)').matches ??
        false,
    );

    useEffect(() => {
      const handleChange = (e: MediaQueryListEvent) =>
        setDark(e.matches);

      const media = window.matchMedia('(prefers-color-scheme: dark)');
      media.addEventListener('change', handleChange);

      return () => media.removeEventListener('change', handleChange);
    }, []);

    return (
      <div
        className={`${
          dark ? darkThemeClass : lightThemeClass
        } ${baseTokenClass}`}
      >
        <Story {...context} />
      </div>
    );
  },
];

export default preview;
