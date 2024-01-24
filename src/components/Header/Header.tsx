import ThemeSwitcher from "../ThemeSwitcher/ThemeSwitcher";
import styles from "./Header.module.css";
export default function Header() {
  return (
    <div className={styles.header}>
      <div className={styles.logo}>GITHUB</div>
      <ThemeSwitcher />
    </div>
  );
}
