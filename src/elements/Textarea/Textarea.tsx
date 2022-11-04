import { BaseSyntheticEvent, useState } from 'react';
import cx from 'classnames';
import styles from './Textarea.module.scss';

type TextareaType = { ButtonName: string; placeholder: string };

export const Textarea = ({ ButtonName, placeholder }: TextareaType) => {
  const [fileName, setFileName] = useState(placeholder);
  const [isFilled, setIsFilled] = useState(false);
  const [isError, setIsError] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const uploadFile = (e: BaseSyntheticEvent) => {
    const file = e.target.files[0];
    const isImage = RegExp('image').exec(file.type);

    setIsFilled(true);
    setFileName(file.name);

    if (!isImage) {
      setIsError(true);
      setErrorMsg('Choose image');
    } else {
      setIsError(false);
    }
  };

  const fileNameCX = cx(styles.fileName, {
    [styles.isError]: isError,
    [styles.isFilled]: isFilled,
  });

  const labelCX = cx(styles.label, {
    [styles.isError]: isError,
  });

  return (
    <div className={styles.container}>
      <label htmlFor="file-input" className={labelCX}>
        {ButtonName}

        {isError && <div className={styles.errorMsg}>{errorMsg}</div>}
      </label>

      <input
        onChange={uploadFile}
        id="file-input"
        className={styles.input}
        type={'file'}
        accept="image/*"
      />

      <div className={fileNameCX}>{fileName}</div>
    </div>
  );
};
