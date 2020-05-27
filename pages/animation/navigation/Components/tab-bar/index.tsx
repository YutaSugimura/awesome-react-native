import React from 'react';
import { TouchableOpacity, StyleSheet, View, Text } from 'react-native';
import { BottomTabBarProps } from '@react-navigation/bottom-tabs';
import { SafeAreaView } from 'react-native-safe-area-context';
import AddButton from '../add-button';
import withInsets, { withInsetsProps } from '../with-insets';

const styles = StyleSheet.create({
  tabButton: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  container: {
    backgroundColor: 'white',
  },
  box: { height: 55, flexDirection: 'row' },
});

const textStyles = (isFocused: boolean): { text: { color: string } } => {
  return StyleSheet.create({
    text: { color: isFocused ? 'navy' : 'grey' },
  });
};

export type TabBarProps = BottomTabBarProps & withInsetsProps;

const Components: React.FC<TabBarProps> = ({ state, descriptors, navigation, insets }) => {
  const onAdd = (): void => {
    navigation.navigate('AnimationModal');
  };

  return (
    <>
      {state.index === 0 && <AddButton onAdd={onAdd} bottomInset={insets.bottom} />}
      <SafeAreaView style={styles.container}>
        <View style={styles.box}>
          {state.routes.map((route, index) => {
            const { options } = descriptors[route.key];
            let label;
            if (options.tabBarLabel === undefined) {
              if (options.title === undefined) {
                label = route.name;
              } else {
                label = options.title;
              }
            } else {
              label = options.tabBarLabel;
            }
            const isFocused = state.index === index;

            const onPress = (): void => {
              const event = navigation.emit({
                type: 'tabPress',
                target: route.key,
                canPreventDefault: true,
              });

              if (!isFocused && !event.defaultPrevented) {
                navigation.navigate(route.name);
              }
            };

            const onLongPress = (): void => {
              navigation.emit({
                type: 'tabLongPress',
                target: route.key,
              });
            };

            return (
              <TouchableOpacity
                accessibilityRole="button"
                accessibilityState={isFocused ? { selected: true } : { selected: false }}
                accessibilityLabel={options.tabBarAccessibilityLabel}
                testID={options.tabBarTestID}
                onPress={onPress}
                onLongPress={onLongPress}
                style={styles.tabButton}
                key={route.key}
              >
                <Text style={textStyles(isFocused).text}>{label}</Text>
              </TouchableOpacity>
            );
          })}
        </View>
      </SafeAreaView>
    </>
  );
};
export default withInsets(Components);
