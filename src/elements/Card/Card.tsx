import ReactTooltip from "react-tooltip";
import { Image } from "elements/Image/Image";
// import { Tooltip } from "elements/Tooltip/Tooltip";
import styles from "./Card.module.scss";

const issue = {
  imgURL: "",
  name: "Pavel",
  position: "Senior frontend developer ffffffffffffffffffffffffffffffffffffff",
  email: "p.omel4enko2002@gmail.com",
  phone: "+380 93 105 50 84",
};

export const Card = () => {
  return (
    <div className={styles.container}>
      <Image />

      {/* <Tooltip title={issue.name}>
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
      </Tooltip> */}

      <p data-tip={issue.name} className={styles.name}>
        {issue.name}
      </p>

      <p data-tip={issue.position} className={styles.position}>
        {issue.position}
      </p>

      <p data-tip={issue.email} className={styles.email}>
        {issue.email}
      </p>

      <p data-tip={issue.phone} className={styles.phone}>
        {issue.phone}
      </p>

      <ReactTooltip
        place='bottom'
        padding='3px 16px'
        arrowColor='transparent'
        delayShow={300}
        delayHide={100}
        overridePosition={({ left, top }: any, currentEvent: any) => ({
          left: currentEvent.x,
          top: currentEvent.y,
        })}
      />
    </div>
  );
};
