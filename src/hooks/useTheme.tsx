import React, { createContext, useContext, useState } from "react";

import { useConfig } from "./useConfig";

type SetThemeProps = { name: "light" | "dark" };

interface ThemeContextData {
  getTheme(): void;
  setTheme: ({ name }: SetThemeProps) => void;
  toggleTheme(): void;
  hasDarkMode: boolean;
}

const ThemeContext = createContext<ThemeContextData>({} as ThemeContextData);

const ThemeProvider: React.FC = ({ children }) => {
  const { LOCAL_STORE_KEY } = useConfig();

  const [hasDarkMode, setHasDarkMode] = useState(false);

  const setTheme = ({ name }: SetThemeProps) => {
    setHasDarkMode(name === "dark");
    localStorage.setItem(LOCAL_STORE_KEY.THEME, name);
    document.documentElement.className = name;
  };

  const getTheme = () => {
    const theme = localStorage.getItem(LOCAL_STORE_KEY.THEME);

    if (!theme) {
      window.matchMedia("(prefers-color-scheme: dark)").matches
        ? setTheme({ name: "dark" })
        : setTheme({ name: "light" });
      return;
    }

    setTheme({ name: theme === "light" ? "light" : "dark" });
  };

  const toggleTheme = () => {
    setTheme({ name: hasDarkMode ? "light" : "dark" });
  };

  return (
    <ThemeContext.Provider
      value={{ getTheme, setTheme, toggleTheme, hasDarkMode }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

function useTheme(): ThemeContextData {
  const context = useContext(ThemeContext);
  if (!context)
    throw Error("the hook useTheme must be used inside a ThemeProvider");
  return context;
}

export { ThemeProvider, useTheme };
