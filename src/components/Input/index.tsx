import React from "react";

import { InputText } from "../../global/styles/input";

interface PropsInput {
  placeholder: string;
}

export default function Input({ placeholder }: PropsInput) {
  return <InputText placeholder={placeholder} />;
}
