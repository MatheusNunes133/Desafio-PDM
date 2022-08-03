import {
  ContainerResult,
  TypeImageResult,
  TypeText,
} from "../../global/styles/typeResult";

interface PropsTypeResult {
  source: NodeRequire;
  text: string;
}

export default function TypeResult({ source, text }: PropsTypeResult) {
  return (
    <ContainerResult>
      <TypeImageResult source={source} />
      <TypeText>{text}</TypeText>
    </ContainerResult>
  );
}
