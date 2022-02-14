import React from 'react';
import { NavigationContainer } from "@react-navigation/native";

import BaseNavigator from "./src/navigation/BaseNavigator";


const App = (props) => {
  return (
    <NavigationContainer>
      <BaseNavigator />
    </NavigationContainer>
  )
}

export default App

