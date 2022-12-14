import React from 'react';
import { Heading } from 'elements/Heading/Heading';
import { Font } from 'elements/Font/Font';
import { Text } from 'elements/Text/Text';
import { Button } from 'elements/Button/Button';
import { FileInput } from 'elements/FileInput/FileInput';
import { Input } from 'elements/Input/Input';
import { Card } from 'elements/Card/Card';
import { Image } from 'elements/Image/Image';
import './App.scss';

export const App = () => {
  return (
    <div style={{ margin: '20px' }}>
      <Font />
      <Heading type="h1">This is Heading</Heading>
      <Text>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, id!
      </Text>

      <Button>Submit</Button>
      <Button disabled>Submit</Button>

      <FileInput buttonName="Upload" placeholder="Upload your photo" />

      <Input type="text" name="name" label="Name" isRequired />
      <Input type="email" name="email" label="Email" isRequired />
      <Input
        type="tel"
        name="phone"
        label="Phone"
        helperText="+38 (XXX) XXX - XX - XX"
        isRequired
      />

      <Card />
    </div>
  );
};
