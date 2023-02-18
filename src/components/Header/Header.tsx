import { Button } from "elements/Button/Button";
import { ReactComponent as ReactLogo } from "images/logo.svg";
import { Container } from "elements/Container/Container";
import styles from "./Header.module.scss";

export const Header = () => {
  return (
    <div className={styles.container}>
      <ReactLogo />

      <div className={styles.buttons}>
        <Button className={styles.button}>Users</Button>
        <Button className={styles.button}>Sign Up</Button>
      </div>
    </div>
  );
};
