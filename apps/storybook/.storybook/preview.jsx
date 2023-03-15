import { ThemeProvider } from '@woxo/ui';
import { useEffect, useState } from 'react';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  // backgrounds: {
  // default: 'dark',
  // },
  // darkMode: {
  //   // Override the default dark theme
  //   dark: { ...themes.dark, appBg: '#212121' },
  //   // Override the default light theme
  //   light: { ...themes.normal, appBg: 'white' }
  // }
};

export const decorators = [
  (Story, context) => {
    const [mode, setMode] = useState('dark');

    useEffect(() => {
      const media = window.matchMedia('(prefers-color-scheme: dark)');

      const handleChange = (isDark) => {
        if (isDark) setMode('dark');
        else setMode('light');
      };

      handleChange(media.matches);
      media.addEventListener('change', (schme) => {
        console.log(schme.matches);
        handleChange(schme.matches);
      });
    }, []);

    useEffect(() => {
      console.log(mode);
    }, [mode]);

    return (
      <ThemeProvider customTheme={{ mode }}>
        <Story {...context} />
      </ThemeProvider>
    );
  },
];
