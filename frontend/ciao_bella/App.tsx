import React from "react";

import { StatusBar } from "expo-status-bar";
import { NavigationContainer,NavigationProp} from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Auth, DogMap, Home, Order, Profile,SitterList,SitterDetail } from "./Screens";

import AntDesign from "@expo/vector-icons/AntDesign";
import Foundation from '@expo/vector-icons/Foundation';
import { GlobalStyles } from "./constants/styles";

import { Provider } from "react-redux";
import { store } from "./store";
import { useAppSelector } from "./hooks";


const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();


////////
export type ScreenNames = ["DogMap", "SitterList","SitterDetail",'Home','Dog','Order','Profile','Auth'] // type these manually
export type RootStackParamList = Record<ScreenNames[number], undefined>;
export type StackNavigation = NavigationProp<RootStackParamList>;
////////




function DogTab(){
  return (
    <Stack.Navigator>
      <Stack.Screen name="DogMap" component={DogMap} />
      <Stack.Screen name="SitterList" component={SitterList} />
      <Stack.Screen name="SitterDetail" component={SitterDetail} />
    </Stack.Navigator>
  );
}
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
          name="Dog"
          component={DogTab}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Foundation
                name="guide-dog"
                size={size}
                color={color}
              />
            ),
            headerShown: false,
          }}
        />
        <Tab.Screen
          name="Order"
          component={Order}
          options={{
            tabBarIcon: ({ color, size }) => (
              <AntDesign
                name='inbox'
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
