import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import ThemeContextProvider from "./components/ThemeSwitcher/ThemeContextProvider.tsx";
import {
  LOCAL_STORAGE_THEME_KEY,
  Theme,
} from "./components/ThemeSwitcher/ThemeContext.ts";
const defaultTheme =
  (localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme) || Theme.LIGHT;

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeContextProvider initialTheme={defaultTheme}>
      <App />
    </ThemeContextProvider>
  </React.StrictMode>
);
