import React from "react";

import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Auth, Home, Profile } from "./Screens";

import AntDesign from "@expo/vector-icons/AntDesign";
import { GlobalStyles } from "./constants/styles";

import { Provider } from "react-redux";
import { store } from "./store";
import { useAppSelector } from "./hooks";

const Tab = createBottomTabNavigator();

export function NavigationCustom() {
  const user = useAppSelector((state)=>state.users.email)
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          tabBarShowLabel: false,
          tabBarInactiveBackgroundColor: GlobalStyles.colors.primary100,
          tabBarActiveBackgroundColor: GlobalStyles.colors.primary400,
          tabBarActiveTintColor: "white",
          tabBarHideOnKeyboard: true,
          animation: "shift",
          headerBackButtonDisplayMode:'minimal'
        }}
      >
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            tabBarIcon: ({ color, size }) => (
              <AntDesign
                name={'home'}
                size={size}
                color={color}
              />
            ),
            headerShown: false,
          }}
        />
        <Tab.Screen
          name="Profile"
          component={user ? Profile : Auth}
          options={{
            tabBarIcon: ({ color, size }) => (
              <AntDesign
                name={user ? "user" : "login"}
                size={size}
                color={color}
              />
            ),
            headerShown: false,
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default function App() {
  return (
    <>
      <StatusBar/>
      <Provider store={store}>
        <NavigationCustom />
      </Provider>
    </>
  );
}
