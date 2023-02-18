import { Button } from "elements/Button/Button";
import { Heading } from "elements/Heading/Heading";
import { Text } from "elements/Text/Text";
import styles from "./Hero.module.scss";

export const Hero = () => {
  return (
    <div className={styles.container}>
      <div className={styles.text}>
        <Heading type='h1'>Test assignment for front-end developer</Heading>
        <Text>
          What defines a good front-end developer is one that has skilled knowledge of HTML, CSS, JS
          with a vast understanding of User design thinking as they'll be building web interfaces
          with accessibility in mind. They should also be excited to learn, as the world of
          Front-End Development keeps evolving.
        </Text>
      </div>

      <Button>Sign Up</Button>
    </div>
  );
};
