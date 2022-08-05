import styled from "styled-components/native";

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

export const ContainerData = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin: 10% 5%;
`;

export const TextMonth = styled.Text`
  color: #000;
  font-size: 20px;
  font-weight: 400;
  line-height: 30px;
`;

export const ArrowButtons = styled.TouchableOpacity``;

export const ContainerCards = styled.View`
  display: flex;
  margin: 15% 5%;
`;

export const TextCards = styled.Text`
  color: #363f5f;
  font-size: 15px;
  font-weight: 400;
  line-height: 22px;
`;
