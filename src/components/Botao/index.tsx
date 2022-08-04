import React from "react";

import { ContainerButton, ContentButton } from "../../global/styles/botao";

interface ButtonProps {
  title: string;
  funcao: Function;
  backgroundColor?: boolean;
  colorText?: boolean;
  width?: string;
}

export default function Botao({
  title,
  funcao,
  backgroundColor,
  colorText,
  width,
}: ButtonProps) {
  return (
    <ContainerButton
      onPress={funcao}
      activeOpacity={0.4}
      background={backgroundColor}
      width={width}
    >
      <ContentButton colorText={colorText}>{title}</ContentButton>
    </ContainerButton>
  );
}
