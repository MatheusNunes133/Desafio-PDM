import React from "react";

import {
  ContentCard,
  ContainerInfoCard,
  InfoTitle,
  InfoText,
  InfoValue,
  ContainerInfoValue,
} from "../../global/styles/cards";

import Entradas from "../Entradas";

interface CardProps {
  title: string;
  value: string;
  mensage: string;
  colorCard?: boolean;
  img: NodeRequire;
  colorText?: boolean;
}

export default function Cards({
  title,
  mensage,
  value,
  colorCard,
  img,
  colorText,
}: CardProps) {
  return (
    <ContentCard colorCard={colorCard}>
      <ContainerInfoCard>
        <InfoTitle colorText={colorText}>{title}</InfoTitle>
        <ContainerInfoValue>
          <InfoValue colorText={colorText}>{value}</InfoValue>
          <InfoText colorText={colorText}>{mensage}</InfoText>
        </ContainerInfoValue>
      </ContainerInfoCard>
      <Entradas image={img} />
    </ContentCard>
  );
}
