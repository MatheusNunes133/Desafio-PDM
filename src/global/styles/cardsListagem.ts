import styled from "styled-components/native";

export const ContentCard = styled.View`
  display: flex;
  justify-content: space-between;
  background-color: #fff;
  height: 128px;
  border-radius: 5px;
  padding: 5% 15px;
  margin-bottom: 20px;
`;

export const ContainerInfoValue = styled.View`
  display: flex;
`;

export const InfoValue = styled.Text`
  color: ${(props) => {
    if (!props.colorText) {
      return "#E83F5B";
    } else {
      return "#12A454";
    }
  }};
  font-size: 20px;
  font-weight: 400;
  line-height: 30px;
`;

export const ContainerInfoCard = styled.View`
  display: flex;
  justify-content: space-between;
  height: 90%;
`;

export const InfoTitle = styled.Text`
  color: #000
  font-size: 14px;
  font-weight: 400;
  line-height: 21px;
`;
export const InfoGastos = styled.View`
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
  margin: 5% 0;
`;

export const TypeGastos = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const TextTypeGastos = styled.Text`
  color: #969cb3;
`;
export const DataGastos = styled.Text`
  color: #969cb3;
`;
