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
  ContainerListagem,
  ListagemText,
  VerticalScroll,
  ContainerCardsListagem,
} from "../../global/styles/home";

import Cards from "../../components/Cards";
import CardsListagem from "../../components/CardsListagem";

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

      <ContainerListagem>
        <ListagemText>Listagem</ListagemText>
        <VerticalScroll>
          <ContainerCardsListagem showsVerticalScrollIndicator={false}>
            <CardsListagem
              title="Desenvolvimento de site"
              value="R$ 12.000,00"
              image={require("../../../assets/images/Vendas.png")}
              textTypeGastos="Vendas"
              dataGastos="13/04/2020"
              colorText
            />
            <CardsListagem
              title="Hamburgueria Pizzy"
              value="- R$ 59,00"
              image={require("../../../assets/images/Alimentacao.png")}
              textTypeGastos="Alimentação"
              dataGastos="10/04/2020"
            />
            <CardsListagem
              title="Aluguel do apartamento"
              value="- R$ 1.200,00"
              image={require("../../../assets/images/Casa.png")}
              textTypeGastos="Casa"
              dataGastos="27/03/2020"
            />
            <CardsListagem
              title="Computador"
              value="R$ 5.400,00"
              image={require("../../../assets/images/Vendas.png")}
              textTypeGastos="Vendas"
              dataGastos="15/04/2020"
              colorText
            />
          </ContainerCardsListagem>
        </VerticalScroll>
      </ContainerListagem>
    </Container>
  );
}
