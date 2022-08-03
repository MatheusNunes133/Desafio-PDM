import React from "react";
import {
  ContainerInfoValue,
  ContentCard,
  InfoTitle,
  DataGastos,
  InfoGastos,
  TextTypeGastos,
  InfoValue,
  TypeGastos,
} from "../../global/styles/cardsListagem";

import ImageType from "../ImageType";

interface CardProps {
  title: string;
  value: string;
  image: NodeRequire;
  textTypeGastos: string;
  dataGastos: string;
  colorText?: boolean;
}

export default function CardsListagem({
  title,
  value,
  image,
  dataGastos,
  textTypeGastos,
  colorText,
}: CardProps) {
  return (
    <ContentCard>
      <ContainerInfoValue>
        <InfoTitle>{title}</InfoTitle>
        <InfoValue colorText={colorText}>{value}</InfoValue>
      </ContainerInfoValue>
      <InfoGastos>
        <TypeGastos>
          <ImageType image={image} />
          <TextTypeGastos>{textTypeGastos}</TextTypeGastos>
        </TypeGastos>
        <DataGastos>{dataGastos}</DataGastos>
      </InfoGastos>
    </ContentCard>
  );
}
