import React from "react";
import { Heading } from "elements/Heading/Heading";
import { Text } from "elements/Text/Text";
import { Button } from "elements/Button/Button";
import { FileInput } from "elements/FileInput/FileInput";
import { Input } from "elements/Input/Input";
import { Card } from "elements/Card/Card";
import { RadioGroup } from "elements/RadioGroup/RadioGroup";
import { Preloader } from "elements/Preloader/Preloader";
// import { RadioInput } from "elements/RadioInput/RadioInput";
// import { RadioAntd } from "elements/RadioAntd/RadioAntd";
import { RegisterForm } from "components/RegisterForm/RegisterForm";
import { Container } from "elements/Container/Container";
import { Header } from "components/Header/Header";
import { Hero } from "components/Hero/Hero";
import "./App.scss";

export const App = () => {
  return (
    <React.Fragment>
      <div style={{ backgroundColor: "white" }}>
        <Container>
          <Header />
        </Container>
      </div>

      <Container>
        <Hero />
      </Container>
    </React.Fragment>
  );
};
