import React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from '../screens/HomeScreen';
import DetailArticleScreen from '../screens/DetailArticleScreen';
import routes from "./routes";

const Stack = createNativeStackNavigator();

const BaseNavigator = () => {

   return (
      <Stack.Navigator
         screenOptions={{ headerShown: false }}
      >
         <Stack.Screen
            name={routes.HOME}
            component={HomeScreen}
         />
         <Stack.Screen
            name={routes.DETAIL}
            component={DetailArticleScreen}
         />
      </Stack.Navigator>
   )
};

export default BaseNavigator;
