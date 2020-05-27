import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../pages/home';
import DeviceInfo from '../pages/deviceInfo';
import Hooks from '../pages/hooks';
import Storage from '../pages/storage';
import Webview from '../pages/webview';
import Maps from '../pages/map';
import Voice from '../pages/voice';
import CustomHooks from '../pages/customHooks';
import AnimationStack from '../navigation/animation';

const Stack = createStackNavigator();

const Router: React.SFC = () => {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="DeviceInfo" component={DeviceInfo} />
      <Stack.Screen name="Hooks" component={Hooks} />
      <Stack.Screen name="Storage" component={Storage} />
      <Stack.Screen name="Webview" component={Webview} />
      <Stack.Screen name="Map" component={Maps} />
      <Stack.Screen name="Voice" component={Voice} />
      <Stack.Screen name="CustomHooks" component={CustomHooks} />
      <Stack.Screen name="Animation" component={AnimationStack} />
    </Stack.Navigator>
  );
};
export default Router;
