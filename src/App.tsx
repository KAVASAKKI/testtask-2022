import React from "react";
import { Heading } from "elements/Heading/Heading";
import { Font } from "elements/Font/Font";
import { Text } from "elements/Text/Text";
import "./App.scss";

export const App = () => (
  <>
    <Font />
    <Heading type='h1'>This is Heading</Heading>
    <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, id!</Text>
  </>
);
