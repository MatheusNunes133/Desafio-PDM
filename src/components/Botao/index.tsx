import React from "react";

import { ContainerButton, ContentButton } from "../../global/styles/botao";

interface ButtonProps {
  title: string;
  funcao: Function;
}

export default function Botao({ title, funcao }: ButtonProps) {
  return (
    <ContainerButton onPress={funcao} activeOpacity={0.4}>
      <ContentButton>{title}</ContentButton>
    </ContainerButton>
  );
}
