import React, { useEffect, useMemo, useState } from 'react';

import { GlobalStyles } from 'twin.macro';

export type ThemeMode = 'dark' | 'light';
export interface Theme {
  mode: ThemeMode;
  autoMode: boolean;
}
export interface ThemeContextType extends Theme {}

const defaultTheme: Theme = {
  mode: window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light',
  autoMode: true,
};
const defaultContext: ThemeContextType = {
  ...defaultTheme,
};

export const ThemeContext = React.createContext<ThemeContextType>(defaultContext);

interface ThemeProviderProps {
  children?: React.ReactNode;
  customTheme?: Partial<Theme>;
}
export const ThemeProvider: React.FC<ThemeProviderProps> = ({ customTheme, children }) => {
  const [mode, setMode] = useState<ThemeMode>(defaultTheme.mode);

  const theme = useMemo(() => {
    return {
      ...defaultTheme,
      ...customTheme,
      mode,
    };
  }, [customTheme, mode]);

  useEffect(() => {
    console.log('theme', theme);
  }, [theme]);

  useEffect(() => {
    const media = window.matchMedia('(prefers-color-scheme: dark)');

    media.addEventListener('change', (schema) => {
      if (theme.autoMode) {
        if (schema.matches) setMode('dark');
        else setMode('light');
      }
    });
  }, [theme.autoMode]);

  return (
    <ThemeContext.Provider value={theme}>
      <>
        <GlobalStyles />
        {children}
      </>
    </ThemeContext.Provider>
  );
};
