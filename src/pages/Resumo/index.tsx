import React from "react";
import Icone from "react-native-vector-icons/MaterialIcons";

import { useState } from "react";

import {
  Container,
  StatusBar,
  Header,
  TitlePagina,
  ContainerData,
  TextMonth,
  ArrowButtons,
  ContainerCards,
  TextCards,
} from "../../global/styles/resumo";

import CardsResumo from "../../components/CardsResumo";

export default function Resumo() {
  const months = [
    "Janeiro, 2022",
    "Fevereiro, 2022",
    "Março, 2022",
    "Abril, 2022",
    "Maio, 2022",
    "Junho, 2022",
    "Julho, 2022",
    "Agosto, 2022",
    "Setembro, 2022",
    "Outubro, 2022",
    "Novembro, 2022",
    "Dezembro, 2022",
  ];

  const [month, setMonth] = useState(0);

  return (
    <Container>
      <Header>
        <StatusBar />
        <TitlePagina>Resumo por categoria</TitlePagina>
      </Header>
      <ContainerData>
        <ArrowButtons
          onPress={() => {
            if (month < 1) {
              setMonth(11);
            } else {
              setMonth(month - 1);
              console.log(month);
            }
          }}
        >
          <Icone name="arrow-back-ios" size={25}></Icone>
        </ArrowButtons>
        <TextMonth>{months[month]}</TextMonth>
        <ArrowButtons
          onPress={() => {
            if (month > 10) {
              setMonth(0);
            } else {
              setMonth(month + 1);
            }
          }}
        >
          <Icone name="arrow-forward-ios" size={25}></Icone>
        </ArrowButtons>
      </ContainerData>
      <ContainerCards>
        <CardsResumo>
          <TextCards>Casa</TextCards>
          <TextCards>R$ 1.200,00</TextCards>
        </CardsResumo>
        <CardsResumo>
          <TextCards>Carro</TextCards>
          <TextCards>R$ 700,00</TextCards>
        </CardsResumo>
        <CardsResumo>
          <TextCards>Alimentação</TextCards>
          <TextCards>R$ 500,00</TextCards>
        </CardsResumo>
        <CardsResumo>
          <TextCards>Alimentação</TextCards>
          <TextCards>R$ 500,00</TextCards>
        </CardsResumo>
      </ContainerCards>
    </Container>
  );
}
