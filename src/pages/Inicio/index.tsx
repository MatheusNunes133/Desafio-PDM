import React from "react";

import {
  StatusBar,
  Container,
  Header,
  LogoContainer,
  Logo,
  AppName,
  SubTitle,
} from "../../global/styles/inicio";

import Botao from "../../components/Botao";

export default function Inicio({ navigation }) {
  return (
    <Container>
      <StatusBar backgroundColor="#5636d3" />
      <Header>
        <LogoContainer>
          <Logo source={require("../../../assets/images/Finance.png")} />
          <AppName>gofinances</AppName>
        </LogoContainer>
        <SubTitle>Controle suas finanças de forma muito simples</SubTitle>
      </Header>
      <Botao
        title="Clique aqui para entrar"
        funcao={() => {
          navigation.navigate("Home");
        }}
        width="80%"
      ></Botao>
    </Container>
  );
}
