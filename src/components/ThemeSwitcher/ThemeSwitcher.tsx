
import styles from "./ThemeSwitcher.module.css";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { BsSun } from "react-icons/bs";
import { useTheme } from "./useTheme";
import { Theme } from "./ThemeContext";

export default function ThemeSwitcher() {
  const { theme: isDark, handleClickThemeToggle: setIsDark } = useTheme();
  const ThemeIcon =
    isDark === Theme.DARK ? (
      <BsFillMoonStarsFill size={20} />
    ) : (
      <BsSun size={20} />
    );
  const ThemeText = isDark === Theme.DARK ? "Dark" : "Light";

  return (
    <div className={styles.switcher} onClick={setIsDark}>
      <span className={styles.themeIcon}>{ThemeIcon}</span>
      <span>{ThemeText}</span>
    </div>
  );
}
