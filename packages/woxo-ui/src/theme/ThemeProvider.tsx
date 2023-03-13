import React, { useState } from 'react';
import { GlobalStyles } from 'twin.macro';

export type ThemeMode = 'dark' | 'light';
export interface Theme {
  mode: ThemeMode;
}
export interface ThemeContext extends Theme {
  setTheme: (theme: Theme) => void;
}

const defaultTheme: Theme = {
  mode: window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light',
};
const defaultContext: ThemeContext = {
  ...defaultTheme,
  setTheme: () => {},
};

export const ThemeContext = React.createContext<ThemeContext>(defaultContext);

interface ThemeProviderProps {
  children?: React.ReactNode;
  customTheme?: Theme;
}
export const ThemeProvider: React.FC<ThemeProviderProps> = ({ customTheme, children }) => {
  const [theme, setTheme] = useState<Theme>({
    ...defaultTheme,
    ...customTheme,
  });

  return (
    <ThemeContext.Provider value={{ ...theme, setTheme }}>
      <>
        <GlobalStyles />
        {children}
      </>
    </ThemeContext.Provider>
  );
};
