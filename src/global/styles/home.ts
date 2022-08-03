import styled from "styled-components/native";

export const StatusBar = styled.StatusBar``;

export const Container = styled.View`
  display: flex;
  flex: 1;
  background-color: #f0f2f5;
`;

export const Header = styled.View`
  background-color: #5636d3;
  height: 30%;
`;

export const HeaderUser = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin: 5% 5%;
`;

export const PerfilUser = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const UserImage = styled.Image`
  width: 52px;
  height: 50px;
  border-radius: 25px;
  margin-right: 18px;
`;

export const TextUser = styled.Text`
  color: white;
  width: 40%;
  font-size: 18px;
  font-weight: 700;
  line-height: 24px;
`;

export const ButtonPowerContainer = styled.TouchableOpacity``;

export const ButtonPower = styled.Image``;

export const ContainerCards = styled.ScrollView``;

export const HorizontalScroll = styled.View`
  margin: -30% 0 0 5%;
`;

export const ContainerListagem = styled.View`
  display: flex;
  margin: 10% 5%;
`;

export const ListagemText = styled.Text`
  color: #000;
  font-size: 18px;
  font-weight: 400;
  line-height: 27px;
  margin-bottom: 20px;
`;

export const VerticalScroll = styled.View`
  height: 60%;
`;

export const ContainerCardsListagem = styled.ScrollView``;
