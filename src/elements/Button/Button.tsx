import styles from './Button.module.scss';

type ButtonType = {
  children: string;
  disabled?: boolean;
};

export const Button = ({ children, disabled = false }: ButtonType) => (
  <button className={styles.button} disabled={disabled}>
    {children}
  </button>
);
