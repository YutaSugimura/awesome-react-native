import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../pages/home';
import DeviceInfo from '../pages/deviceInfo';
import Hooks from '../pages/hooks';
import Storage from '../pages/storage';
import Webview from '../pages/webview';
import Maps from '../pages/map';
import Voice from '../pages/voice';
import VoiceRecord from '../pages/voiceRecord';
import CustomHooks from '../pages/customHooks';
import AnimationStack, { AnimationStackParamList } from '../navigation/animation';
import Storybook from '../pages/storybook';

export type ParamName =
  | 'Home'
  | 'DeviceInfo'
  | 'Hooks'
  | 'Storage'
  | 'Webview'
  | 'Map'
  | 'Voice'
  | 'VoiceRecord'
  | 'CustomHooks'
  | 'Animation'
  | 'Storybook';

export type RootStackParamList = {
  Home: undefined;
  DeviceInfo: undefined;
  Hooks: undefined;
  Storage: undefined;
  Webview: undefined;
  Map: undefined;
  Voice: undefined;
  VoiceRecord: undefined;
  CustomHooks: undefined;
  Animation: AnimationStackParamList;
  Storybook: undefined;
};

const RootStack = createStackNavigator<RootStackParamList>();

const Router: React.SFC = () => {
  return (
    <RootStack.Navigator initialRouteName="Home">
      <RootStack.Screen name="Home" component={Home} />
      <RootStack.Screen name="DeviceInfo" component={DeviceInfo} />
      <RootStack.Screen name="Hooks" component={Hooks} />
      <RootStack.Screen name="Storage" component={Storage} />
      <RootStack.Screen name="Webview" component={Webview} />
      <RootStack.Screen name="Map" component={Maps} />
      <RootStack.Screen name="Voice" component={Voice} />
      <RootStack.Screen name="VoiceRecord" component={VoiceRecord} />
      <RootStack.Screen name="CustomHooks" component={CustomHooks} />
      <RootStack.Screen name="Animation" component={AnimationStack} />
      <RootStack.Screen name="Storybook" component={Storybook} />
    </RootStack.Navigator>
  );
};
export default Router;
