import styles from './RadioInput.module.scss';

type RadioInputType = { name: string; value: string };

export const RadioInput = ({ name, value }: RadioInputType) => {
  return (
    <>
      <label className={styles.label}>
        <input
          className={styles.input}
          type="radio"
          name={name}
          value={value}
        />
        <span className={styles.customInput}>
          <span className={styles.dot}></span>
        </span>
        {value}
      </label>
    </>
  );
};
