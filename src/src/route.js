import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Start from "./pages/start/Start"
import Login from "./pages/login/Login";
import InformationUser from "./pages/information/InformationUser"

const AppStack = createStackNavigator();

export default function Routes() {
  return (
    <NavigationContainer>
      <AppStack.Navigator>
        <AppStack.Screen 
          name="Inicio" 
          component={Start}  
          options={{ cardStyle: { backgroundColor: "white" }}}
        />
        <AppStack.Screen 
          name="Login" 
          component={Login}  
          options={{ cardStyle: { backgroundColor: "white" }}}
        />
        <AppStack.Screen 
          name="InformationUser" 
          component={InformationUser}  
          options={{ cardStyle: { backgroundColor: "white" }}}
        />
      </AppStack.Navigator>
    </NavigationContainer>
  );
}