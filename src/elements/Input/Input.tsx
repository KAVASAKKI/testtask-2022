import { useState } from "react";
import cx from "classnames";
import { useValidate } from "hooks/useValidate";
import styles from "./Input.module.scss";

type InputType = {
  type: string;
  name: string;
  label: string;
  helperText?: string;
  isRequired?: boolean;
  className?: string;
};

export const Input = ({ type, name, label, helperText, isRequired, className }: InputType) => {
  const [isFocus, setIsFocus] = useState(false);
  const { onValidate, isError, message } = useValidate(isRequired, helperText);

  const labelCX = cx(styles.label, {
    [styles.isFocus]: isFocus,
    [styles.isError]: isError,
  });

  const inputCX = cx(styles.input, {
    [styles.isError]: isError,
  });

  const messageCX = cx(styles.message, {
    [styles.isError]: isError,
  });

  return (
    <div className={`${styles.container} ${className}`}>
      <label className={labelCX} htmlFor={name}>
        {label}
      </label>

      <input
        id={name}
        className={inputCX}
        type={type}
        name={name}
        onFocus={() => setIsFocus(true)}
        onBlur={(e) => e.target.value === "" && setIsFocus(false)}
        onChange={onValidate}
      />

      <div className={messageCX}>{message}</div>
    </div>
  );
};
