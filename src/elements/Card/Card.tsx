import { Image } from 'elements/Image/Image';
import styles from './Card.module.scss';

const issue = {
  imgURL: '',
  name: 'Pavel',
  position: 'Senior frontend developer ffffffffffffffffffffffffffffffffffffff',
  email: 'p.omel4enko2002@gmail.com',
  phone: '+380 93 105 50 84',
};

export const Card = () => {
  return (
    <div className={styles.container}>
      <Image />

      <p className={styles.name}>{issue.name}</p>

      <p className={styles.position}>{issue.position}</p>

      <p className={styles.email}>{issue.email}</p>

      <p className={styles.phone}>{issue.phone}</p>
    </div>
  );
};
