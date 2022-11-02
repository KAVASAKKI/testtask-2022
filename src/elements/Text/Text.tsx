import styles from "./Text.module.scss";

type TextType = {
  children: string;
};

export const Text = ({ children }: TextType) => {
  return <p className={styles.text}>{children}</p>;
};
