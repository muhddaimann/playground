// ThemeProvider.tsx
import React, { createContext, useContext } from 'react';
import { lightTheme } from './themes';

const ThemeContext = createContext(lightTheme);

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <ThemeContext.Provider value={lightTheme}>{children}</ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);