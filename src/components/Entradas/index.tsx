import React from "react";

import { Container, Entrada } from "../../global/styles/entradas";

interface EntradasProps {
  image: NodeRequire;
}

export default function Entradas({ image }: EntradasProps) {
  return <Entrada source={image} />;
}
