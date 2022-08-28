import React, { Component } from "react";

import { ContainerCards } from "../../global/styles/cardsResumo";

export default function CardsResumo({
  children,
}: JSX.ElementChildrenAttribute) {
  return <ContainerCards>{children}</ContainerCards>;
}
