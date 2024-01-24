import React from "react";
import styles from "./Search.module.css";

import Button from "../Button/Button";

interface SearchProps {
  hasError: boolean;
  onSubmit: (text: string) => void;
}
type FormFields = {
  username: HTMLInputElement;
};
export default function Search({ hasError, onSubmit }: SearchProps) {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement & FormFields>) => {
    e.preventDefault();

    const text = e.currentTarget.username.value;
    if (text) {
      onSubmit(text);
      e.currentTarget.reset();
    }
  };

  return (
    <form className={styles.card} autoComplete="off" onSubmit={handleSubmit}>
      <div className={styles.cardInner}>
        <div className={styles.container}>
          <div className={styles.icon}>
            {hasError && <div className={styles.error}>No result</div>}
            <Button>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#657789"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="feather feather-search"
              >
                <circle cx="11" cy="11" r="8" />
                <line x1="21" y1="21" x2="16.65" y2="16.65" />
              </svg>
            </Button>
          </div>

          <div className={styles.inputContainer}>
            <input
              placeholder="Search Github user"
              name="username"
              id="search"
              type="text"
            />
          </div>
        </div>
      </div>
    </form>
  );
}
