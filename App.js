import React from 'react';
import { NavigationContainer } from "@react-navigation/native";
import Toast from "react-native-toast-message";

import BaseNavigator from "./src/navigation/BaseNavigator";
import toastConfig from './src/config/toastConfig';


const App = (props) => {
  return (
    <>
      <NavigationContainer>
        <BaseNavigator />
      </NavigationContainer>
      <Toast config={toastConfig} />
    </>
  )
}

export default App

