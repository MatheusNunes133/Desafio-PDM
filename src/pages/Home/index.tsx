import React from "react";

import {
  Container,
  Header,
  HeaderUser,
  PerfilUser,
  UserImage,
  TextUser,
  ButtonPowerContainer,
  ButtonPower,
  ContainerCards,
  HorizontalScroll,
  StatusBar,
} from "../../global/styles/home";

import Cards from "../../components/Cards";

export default function () {
  return (
    <Container>
      <StatusBar backgroundColor="#5636d3" />
      <Header>
        <HeaderUser>
          <PerfilUser>
            <UserImage source={require("../../../assets/images/perfil.jpeg")} />
            <TextUser>Olá, Matheus</TextUser>
          </PerfilUser>
          <ButtonPowerContainer
            onPress={() => {
              alert("Power");
            }}
          >
            <ButtonPower source={require("../../../assets/images/power.png")} />
          </ButtonPowerContainer>
        </HeaderUser>
      </Header>
      <HorizontalScroll>
        <ContainerCards
          horizontal={true}
          showsHorizontalScrollIndicator={false}
        >
          <Cards
            title="Entradas"
            value="R$ 20.000,00"
            mensage="Última entrada dia 13 de abril"
            img={require("../../../assets/images/Entradas.png")}
          ></Cards>
          <Cards
            title="Saídas"
            value="R$ 1.500,00"
            mensage="Última saída dia 13 de abril"
            img={require("../../../assets/images/saidas.png")}
          ></Cards>
          <Cards
            title="Total"
            value="R$ 18.500,00"
            mensage="01 à 16 de abril"
            img={require("../../../assets/images/total.png")}
            colorCard
            colorText
          ></Cards>
        </ContainerCards>
      </HorizontalScroll>
    </Container>
  );
}
