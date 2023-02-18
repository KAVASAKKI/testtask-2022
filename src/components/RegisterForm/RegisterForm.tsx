import React from "react";
import { FormControl, styled } from "@mui/material";
import { Heading } from "elements/Heading/Heading";
import { Button } from "elements/Button/Button";
import { FileInput } from "elements/FileInput/FileInput";
import { RadioGroup } from "elements/RadioGroup/RadioGroup";
import { Input } from "elements/Input/Input";
import styles from "./RegisterForm.module.scss";

export const RegisterForm = () => {
  return (
    <FormControl className={styles.container}>
      <Input className={styles.input} label='Your name' type='text' name='name' isRequired />

      <Input className={styles.input} label='Email' type='email' name='email' isRequired />

      <Input
        className={styles.input}
        label='Phone'
        type='tel'
        name='tel'
        helperText='+38 (XXX) XXX - XX - XX'
        isRequired
      />

      <RadioGroup className={styles.radioGroup} />

      <FileInput className={styles.fileInput} placeholder='Upload your photo' buttonName='Upload' />

      <Button className={styles.submitBtn}>Sign up</Button>
    </FormControl>
  );
};
