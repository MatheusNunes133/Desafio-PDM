import styled from "styled-components/native";

export const ContentCard = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  background-color: ${(props) => {
    if (!props.colorCard) {
      return "#FFF";
    } else {
      return "#FF872C";
    }
  }};
  height: 200px;
  margin-right: 15px;
  border-radius: 5px;
  padding: 5% 15px;
`;

export const ContainerInfoCard = styled.View`
  display: flex;
  justify-content: space-between;
  height: 80%;
`;

export const InfoTitle = styled.Text`
  color: ${(props) => {
    if (!props.colorText) {
      return "#363f5f";
    } else {
      return "#FFF";
    }
  }}
  font-size: 18px;
  font-weight: 400;
  line-height: 21px;
`;

export const ContainerInfoValue = styled.View`
  display: flex;
`;

export const InfoValue = styled.Text`
  color: ${(props) => {
    if (!props.colorText) {
      return "#363f5f";
    } else {
      return "#FFF";
    }
  }};
  font-size: 32px;
  font-weight: 500;
  line-height: 42px;
`;

export const InfoText = styled.Text`
  color: ${(props) => {
    if (!props.colorText) {
      return "#969cb3";
    } else {
      return "#FFF";
    }
  }}
  font-size: 12px;
  font-weight: 400;
  line-height: 18px;
`;
