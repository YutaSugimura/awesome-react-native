import React, { useState } from 'react';
import { TouchableOpacity, Text, StyleSheet, Animated } from 'react-native';

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'navy',
    width: 55,
    height: 55,
    borderRadius: 28,
    position: 'absolute',
    right: 20,
    alignItems: 'center',
    justifyContent: 'center',
    bottom: 75,
    zIndex: 1,
    elevation: 1,
  },
  text: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
  },
});

interface Props {
  onAdd: () => void;
  bottomInset: number;
}

const Components: React.SFC<Props> = ({ onAdd, bottomInset }) => {
  const [scaleValue] = useState(new Animated.Value(0));

  const onButtonClicked = (): void => {
    Animated.timing(scaleValue, {
      toValue: 1,
      useNativeDriver: true,
      duration: 700,
    }).start(() => {
      scaleValue.setValue(0);
    });
    onAdd();
  };

  const scaleValueInterpolation = scaleValue.interpolate({
    inputRange: [0, 0.25, 1],
    outputRange: [1, 20, 30],
  });

  return (
    <>
      <Animated.View
        style={[
          styles.container,
          { transform: [{ scale: scaleValueInterpolation }], bottom: 70 + bottomInset },
        ]}
      />
      <TouchableOpacity
        style={[styles.container, { bottom: 70 + bottomInset }]}
        onPress={onButtonClicked}
      >
        <Text style={styles.text}>+</Text>
      </TouchableOpacity>
    </>
  );
};
export default Components;
