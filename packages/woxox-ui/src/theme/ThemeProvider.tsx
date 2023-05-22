import React, { useState } from 'react';

import { GlobalStyles as BaseStyles } from 'twin.macro';

export interface Theme {
  textColor: string;
}
const initalTheme: Theme = {
  textColor: 'white',
};

export const ThemeContext = React.createContext<Theme>(initalTheme);

interface ThemeProviderProps {
  children: React.ReactElement;
}
export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const [theme] = useState<Theme>(initalTheme);

  return (
    <ThemeContext.Provider value={theme}>
      <BaseStyles />
      {children}
    </ThemeContext.Provider>
  );
};
