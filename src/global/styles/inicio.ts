import React from "react";
import styled from "styled-components/native";

export const StatusBar = styled.StatusBar``;

export const Container = styled.View`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: #5636d3;
`;

export const Header = styled.View`
  display: flex;
  width: 80%;
`;

export const LogoContainer = styled.View`
  display: flex;
  align-items: center;
  margin-bottom: 45px;
`;

export const Logo = styled.Image`
  width: 70px;
  height: 70px;
`;

export const AppName = styled.Text`
  color: white;
  font-size: 25px;
`;

export const SubTitle = styled.Text`
  color: white;
  font-size: 30px;
  line-height: 40px;
  font-weight: 500;
  text-align: center;
  margin-bottom: 100px;
`;
