import { useMemo, useState } from "react";
import { LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext } from "./ThemeContext";

interface ThemeContextProviderProps {
  children: React.ReactNode;
  initialTheme?: Theme;
}
const defaultTheme =
  (localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme) || Theme.LIGHT;
export default function ThemeContextProvider({
  children,
  initialTheme,
}: ThemeContextProviderProps) {
  const [theme, setTheme] = useState<Theme>(initialTheme || defaultTheme);

  const defaultProps = useMemo(() => {
    return {
      theme: theme,
      setTheme: setTheme,
    };
  }, [theme]);

  return (
    <ThemeContext.Provider value={defaultProps}>
      {children}
    </ThemeContext.Provider>
  );
}
