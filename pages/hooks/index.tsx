import React, { useState } from 'react';
import { SafeAreaView, Text, StyleSheet, Button, TextInput } from 'react-native';
import { useAppState, useClipboard, useKeyboard } from '@react-native-community/hooks';
import { useAppearance } from '../../context/Appearance';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  text: {
    fontSize: 15,
  },
  textLight: {
    color: 'rgba(0, 0, 0, 0.87)',
  },
  textDark: {
    color: '#fff',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
  },
});

const Page: React.FC = () => {
  const appearance = useAppearance();
  const currentAppState = useAppState();
  const [data, setString] = useClipboard();
  const keyboard = useKeyboard();

  const [value, onChangeText] = useState('Useless Placeholder');

  const { container, text, textLight, textDark, input } = styles;
  const theme = {
    text: appearance === 'light' ? textLight : textDark,
  };
  return (
    <SafeAreaView style={container}>
      <Text style={[text, theme.text]}>currentAppState: {currentAppState}</Text>

      <Text style={[text, theme.text]}>useClipboard</Text>
      <Text style={[text, theme.text]}>currentClipboard: {data}</Text>
      <Button title="Update Clipboard" onPress={(): void => setString('new clipboard data')} />

      <Text style={[text, theme.text]}>useKeyboard</Text>
      <Text style={[text, theme.text]}>
        keyboard isKeyboardShow: {keyboard.keyboardShown.toString()}
      </Text>
      <Text style={[text, theme.text]}>
        keyboard keyboardHeight: {keyboard.keyboardHeight.toString()}
      </Text>
      <TextInput
        style={input}
        value={value}
        onChangeText={(newValue: string): void => onChangeText(newValue)}
      />
    </SafeAreaView>
  );
};
export default Page;
