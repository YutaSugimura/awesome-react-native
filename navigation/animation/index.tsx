import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../../pages/animation/navigation';
import ModalScreen from '../../pages/animation/navigation/modal';
import TabBar from '../../pages/animation/navigation/Components/tab-bar';
import { opacityTransition } from './opacityTransition';

type TabBarStackParamList = {
  AnimationHome: undefined;
};

type RootStackParamList = {
  AnimationTabBar: TabBarStackParamList;
  AnimationModal: undefined;
};

const TabBarStack = createBottomTabNavigator<TabBarStackParamList>();
const RootStack = createStackNavigator<RootStackParamList>();

const TabBarStackScreen: React.SFC = () => (
  <TabBarStack.Navigator tabBar={(props) => <TabBar {...props} />}>
    <TabBarStack.Screen name="AnimationHome" component={HomeScreen} />
  </TabBarStack.Navigator>
);

const Stack: React.SFC = () => {
  return (
    <RootStack.Navigator headerMode="none" mode="modal" screenOptions={{ ...opacityTransition }}>
      <RootStack.Screen name="AnimationTabBar" component={TabBarStackScreen} />
      <RootStack.Screen name="AnimationModal" component={ModalScreen} />
    </RootStack.Navigator>
  );
};
export default Stack;
