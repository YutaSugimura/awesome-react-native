import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../pages/home';
import DeviceInfo from '../pages/deviceInfo';
import Webview from '../pages/webview';
import Maps from '../pages/map';

const Stack = createStackNavigator();

const Router: React.SFC = () => {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="DeviceInfo" component={DeviceInfo} />
      <Stack.Screen name="Webview" component={Webview} />
      <Stack.Screen name="Map" component={Maps} />
    </Stack.Navigator>
  );
};
export default Router;
