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

export type AnimationStackParamList = {
  AnimationTabBar: TabBarStackParamList;
  AnimationModal: undefined;
};

const TabBarStack = createBottomTabNavigator<TabBarStackParamList>();
const AnimationStack = createStackNavigator<AnimationStackParamList>();

const TabBarStackScreen: React.SFC = () => (
  <TabBarStack.Navigator tabBar={(props): React.ReactNode => <TabBar {...props} />}>
    <TabBarStack.Screen name="AnimationHome" component={HomeScreen} />
  </TabBarStack.Navigator>
);

const Stack: React.SFC = () => {
  return (
    <AnimationStack.Navigator
      headerMode="none"
      mode="modal"
      screenOptions={{ ...opacityTransition }}
    >
      <AnimationStack.Screen name="AnimationTabBar" component={TabBarStackScreen} />
      <AnimationStack.Screen name="AnimationModal" component={ModalScreen} />
    </AnimationStack.Navigator>
  );
};
export default Stack;
