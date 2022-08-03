import styled from "styled-components/native";
import { Picker, PickerItemProps } from "@react-native-picker/picker";
export const StatusBar = styled.StatusBar``;

export const Container = styled.View`
  display: flex;
  flex: 1;
  background-color: #f0f2f5;
`;

export const Header = styled.View`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #5636d3;
  height: 15%;
`;

export const TitlePagina = styled.Text`
  color: #fff;
  font-size: 18px;
  font-weight: 400;
  line-height: 27px;
`;

export const ContainerInfo = styled.View`
  display: flex;
  flex: 1;
  justify-content: space-between;
  margin: 15% 5% 3% 5%;
`;

export const FirstSection = styled.View`
  display: flex;
`;

export const TypeCadastro = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
`;

export const SectionButton = styled.View`
  display: flex;
`;

export const ButtonSelect = Picker;
