import styles from "./Button.module.scss";

type ButtonType = {
  children: string;
  disabled?: boolean;
  className?: string;
};

export const Button = ({ children, disabled = false, className }: ButtonType) => (
  <button className={`${styles.button} ${className}`} disabled={disabled}>
    {children}
  </button>
);
