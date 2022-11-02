import styles from "./BG.module.scss";

type BGType = {
  children: string;
  color: "primary" | "secondary" | "background";
};

export const BG = ({ children, color }: BGType) => {
  return <p className={styles.text}>{children}</p>;
};
