import React from "react";

import { useState } from "react";

import {
  StatusBar,
  Container,
  Header,
  TitlePagina,
  ContainerInfo,
  FirstSection,
  TypeCadastro,
  SectionButton,
  ButtonSelect,
} from "../../global/styles/cadastro";

import Input from "../../components/Input";
import TypeResult from "../../components/TypeResult";
import Botao from "../../components/Botao";

export default function Cadastro() {
  const [picker, setPicker] = useState();

  return (
    <Container>
      <Header>
        <StatusBar />
        <TitlePagina>Cadastro</TitlePagina>
      </Header>
      <ContainerInfo>
        <FirstSection>
          <Input placeholder="Nome"></Input>
          <Input placeholder="Preço"></Input>
          <TypeCadastro>
            <TypeResult
              source={require("../../../assets/images/Entradas.png")}
              text="Income"
            />
            <TypeResult
              source={require("../../../assets/images/saidas.png")}
              text="Outcome"
            />
          </TypeCadastro>
          <ButtonSelect
            style={{
              height: 50,
              backgroundColor: "#FFF",
              marginTop: 20,
              borderRadius: 10,
            }}
            selectedValue={picker}
            placeholder="Categoria"
            onValueChange={(itemValue, itemIndex) => {
              setPicker(itemValue);
              console.log(itemValue);
            }}
          >
            <ButtonSelect.Item label="Vendas" value="Vendas" />
            <ButtonSelect.Item label="Alimentação" value="Alimentação" />
            <ButtonSelect.Item label="Casa" value="Casa" />
          </ButtonSelect>
        </FirstSection>

        <SectionButton>
          <Botao
            title="Enviar"
            funcao={() => {
              alert("clicou para Enviar Dados");
            }}
            backgroundColor
            colorText
            width="100%"
          ></Botao>
        </SectionButton>
      </ContainerInfo>
    </Container>
  );
}
