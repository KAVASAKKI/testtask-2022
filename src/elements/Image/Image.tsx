import defaultUserIcon from 'images/default-user-icon.svg';
import styles from './Image.module.scss';

type ImageType = { imageURL?: string; name?: string };

export const Image = ({ imageURL = defaultUserIcon, name }: ImageType) => {
  return <img src={imageURL} alt={name} className={styles.image} />;
};
