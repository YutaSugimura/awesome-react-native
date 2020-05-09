import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../pages/home';
import Webview from '../pages/webview';
import Map from '../pages/map';

const Stack = createStackNavigator();

const Router: React.SFC = () => {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Webview" component={Webview} />
      <Stack.Screen name="Map" component={Map} />
    </Stack.Navigator>
  );
};
export default Router;
