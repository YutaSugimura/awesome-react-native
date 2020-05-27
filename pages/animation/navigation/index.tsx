import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { CompositeNavigationProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
});

interface Props {
  navigation: CompositeNavigationProp<
    BottomTabNavigationProp<{ AnimationHome: undefined }, 'AnimationHome'>,
    StackNavigationProp<{
      AnimationTabBar: { AnimationHome: undefined };
      AnimationModal: undefined;
    }>
  >;
}

const Page: React.FC<Props> = () => {
  return (
    <>
      <View style={styles.container}>
        <Text>Home</Text>
      </View>
    </>
  );
};
export default Page;
