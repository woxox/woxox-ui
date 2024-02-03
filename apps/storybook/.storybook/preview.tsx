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
      document.body.className = baseTokenClass;
      const handleChange = (e: MediaQueryListEvent) => {
        document.body.classList.toggle(lightThemeClass, !e.matches);
        document.body.classList.toggle(darkThemeClass, e.matches);
        setDark(e.matches);
      };

      const media = window.matchMedia('(prefers-color-scheme: dark)');

      document.body.classList.toggle(lightThemeClass, !media.matches);
      document.body.classList.toggle(darkThemeClass, media.matches);

      media.addEventListener('change', handleChange);

      return () => media.removeEventListener('change', handleChange);
    }, []);

    return <Story {...context} />;
  },
];

export default preview;
