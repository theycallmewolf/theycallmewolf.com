import React, { createContext, useContext, useState } from 'react';

type SetThemeProps = { name: 'light' | 'dark' };

interface ThemeContextData {
  getTheme(): void;
  setTheme: ({ name }: SetThemeProps) => void;
  toggleTheme(): void;
  hasDarkMode: boolean;
}

const ThemeContext = createContext<ThemeContextData>({} as ThemeContextData);

const ThemeProvider: React.FC = ({ children }) => {
  const [hasDarkMode, setHasDarkMode] = useState(false);

  const setTheme = ({ name }: SetThemeProps) => {
    name === 'dark' ? setHasDarkMode(true) : setHasDarkMode(false);
    localStorage.setItem('@wolf_theme', name);
    document.documentElement.className = name;
  };

  const getTheme = () => {
    const theme = localStorage.getItem('@wolf_theme');

    if (!theme) {
      window.matchMedia('(prefers-color-scheme: dark)').matches
        ? setTheme({ name: 'dark' })
        : setTheme({ name: 'light' });
      return;
    }

    theme === 'light' ? setTheme({ name: 'light' }) : setTheme({ name: 'dark' });
  };

  const toggleTheme = () => {
    hasDarkMode ? setTheme({ name: 'light' }) : setTheme({ name: 'dark' });
  };

  return (
    <ThemeContext.Provider value={{ getTheme, setTheme, toggleTheme, hasDarkMode }}>
      {children}
    </ThemeContext.Provider>
  );
};

function useTheme(): ThemeContextData {
  const context = useContext(ThemeContext);
  if (!context) throw Error('the hook useTheme must be used inside a ThemeProvider');
  return context;
}

export { ThemeProvider, useTheme };
