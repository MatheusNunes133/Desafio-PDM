import styled from "styled-components/native";

export const ContainerButton = styled.TouchableOpacity`
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${(props) => {
    return String(props.width);
  }};
  height: 56px;
  background-color: ${(props) => {
    if (props.background) {
      return "#FF872C";
    } else {
      return "#FFF";
    }
  }}
  border-radius: 5px;
`;

export const ContentButton = styled.Text`
  color: ${(props) => {
    if (props.colorText) {
      return "#FFF";
    } else {
      return "#363F5F";
    }
  }}
  font-size: 14px;
  font-weight: 500;
`;
