import React from 'react';
import { Heading } from 'elements/Heading/Heading';
import { Font } from 'elements/Font/Font';
import { Text } from 'elements/Text/Text';
import { Button } from 'elements/Button/Button';
import { Textarea } from 'elements/Textarea/Textarea';
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

      <Textarea ButtonName="Upload" placeholder="Upload your photo" />
    </div>
  );
};
