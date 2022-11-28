import { Image } from 'elements/Image/Image';
import { Tooltip, ReactTooltipCustom } from 'elements/Tooltip/Tooltip';
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

      <Tooltip title={issue.name}>
        <p className={styles.name}>{issue.name}</p>
      </Tooltip>

      <Tooltip title={issue.position}>
        <p className={styles.position}>{issue.position}</p>
      </Tooltip>

      <Tooltip title={issue.email}>
        <p className={styles.email}>{issue.email}</p>
      </Tooltip>

      <Tooltip title={issue.phone}>
        <p className={styles.phone}>{issue.phone}</p>
      </Tooltip>

      <ReactTooltipCustom />
    </div>
  );
};
