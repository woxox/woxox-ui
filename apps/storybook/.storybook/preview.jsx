import { ThemeProvider } from '@woxo/ui';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  cssUserPrefs: {
    'prefers-color-scheme': 'dark',
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
    return (
      <ThemeProvider>
        <Story {...context} />
      </ThemeProvider>
    );
  },
];
