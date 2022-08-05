import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icone from "react-native-vector-icons/MaterialIcons";

import Inicio from "../pages/Inicio";
import Home from "..//pages/Home";
import Cadastro from "./Cadastro";
import Resumo from "./Resumo";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator
      initialRouteName="Listagem"
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: "#FF872C",
        tabBarInactiveTintColor: "#363F5F",
        tabBarShowLabel: true,
        tabBarLabelStyle: { fontSize: 14 },
      }}
    >
      <Tab.Screen
        name="Listagem"
        component={Home}
        options={{
          tabBarIcon: ({ size, color }) => {
            return (
              <Icone name="format-list-bulleted" size={size} color={color} />
            );
          },
        }}
      />
      <Tab.Screen
        name="Cadastrar"
        component={Cadastro}
        options={{
          tabBarIcon: ({ size, color }) => {
            return (
              <Icone name="add-circle-outline" size={size} color={color} />
            );
          },
        }}
      />
      <Tab.Screen
        name="Resumo"
        component={Resumo}
        options={{
          tabBarIcon: ({ size, color }) => {
            return <Icone name="graphic-eq" size={size} color={color} />;
          },
        }}
      />
    </Tab.Navigator>
  );
};

const Navegacao = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Inicio">
        <Stack.Screen
          name="Inicio"
          component={Inicio}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="Home"
          component={TabNavigator}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default function Routes() {
  return <Navegacao></Navegacao>;
}
