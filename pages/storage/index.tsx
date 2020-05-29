import React, { useState, useEffect } from 'react';
import { SafeAreaView, Text, Button, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
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
});

const Page: React.FC = () => {
  const appearance = useAppearance();
  const [state, setState] = useState<string>('empty');
  const key = '@storage_Key';

  const getData = async (): Promise<void> => {
    try {
      const value = await AsyncStorage.getItem(key);
      if (value !== null) {
        setState(value);
      }
    } catch {}
  };

  const setData = async (): Promise<void> => {
    try {
      const newValue = 'new value';
      await AsyncStorage.setItem(key, newValue);
      setState(newValue);
    } catch {}
  };

  const removeData = async (): Promise<void> => {
    try {
      await AsyncStorage.removeItem(key);
      setState('empty');
    } catch {}
  };

  useEffect(() => {
    getData();
  }, []);

  const { container, text, textLight, textDark } = styles;

  const theme = {
    text: appearance === 'light' ? textLight : textDark,
  };

  return (
    <SafeAreaView style={container}>
      <Text style={[text, theme.text]}>Storage</Text>
      <Text style={[text, theme.text]}>key: {key}</Text>
      <Text style={[text, theme.text]}>value: {state}</Text>

      <Button title="setData" onPress={setData} />
      <Button title="removeData" onPress={removeData} />
    </SafeAreaView>
  );
};
export default Page;
