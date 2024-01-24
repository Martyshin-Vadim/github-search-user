import { useContext } from "react";
import { LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext } from "./ThemeContext";

export const useTheme = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  const handleClickThemeToggle = () => {
    if (setTheme) {
      const newTheme = theme === Theme.DARK ? Theme.LIGHT : Theme.DARK;
      setTheme(newTheme);
      document.body.setAttribute("data-theme", newTheme);
      localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme);
    }
  };
  return { theme, handleClickThemeToggle };
};
