import { ReactElement, ReactNode } from "react";
import styles from "./Container.module.scss";

type containerT = { children: ReactNode };

export const Container = ({ children }: containerT) => {
  return <div className={styles.container}>{children}</div>;
};
