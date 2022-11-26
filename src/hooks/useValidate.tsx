import { BaseSyntheticEvent, useState } from 'react';

export const useValidate = (isRequired?: boolean, helperText?: string) => {
  const [isError, setIsError] = useState(false);
  const [message, setMessage] = useState(helperText);

  const onValidate = (e: BaseSyntheticEvent) => {
    const validNameRegex = /^[a-zA-Z]+$/i;
    const validEmailRegex = /^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i;
    const validTelRegex =
      /^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/;

    const value = e.target.value;
    const name = e.target.name;

    if (isRequired && value === '') {
      setIsError(true);
      setMessage(`Enter your ${name}`);
    } else {
      setIsError(false);
      setMessage(helperText);
    }

    switch (name) {
      case 'name':
        if (value && value.length > 15) {
          setIsError(true);
          setMessage('name to long');
        }

        if (value && value.length < 2) {
          setIsError(true);
          setMessage('name to short');
        }

        if (value.match(validNameRegex) === null && value !== '') {
          setIsError(true);
          setMessage(`invalid ${name}`);
        }

        return;

      case 'email':
        if (value.match(validEmailRegex) === null && value !== '') {
          setIsError(true);
          setMessage(`invalid ${name}`);
        }

        return;

      case 'phone':
        if (value.match(validTelRegex) === null && value !== '') {
          setIsError(true);
          setMessage(`invalid ${name}`);
        }

        return;

      default:
        break;
    }
  };

  return { onValidate, isError, message };
};
