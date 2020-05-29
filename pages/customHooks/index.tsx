import React from 'react';
import { SafeAreaView, Text, Button, Alert, StyleSheet } from 'react-native';
import { useAppearance } from '../../context/Appearance';
import { useShare, useStorage, useMultiStorage } from './hooks';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    paddingTop: 12,
    paddingBottom: 12,
  },
  text: {
    fontSize: 15,
    textAlign: 'center',
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
  const [onShare, activityType] = useShare();

  const share = async (): Promise<void> => {
    await onShare('message message');
    Alert.alert(activityType);
  };

  const [storage, setData, removeData] = useStorage('test');

  const setStorage = (): void => {
    setData('testValue');
  };

  const removeStorage = (): void => {
    removeData();
  };

  const [multiValues, multiSet, multiRemove] = useMultiStorage(['test1', 'test2']);

  const multiSetStorage = (): void => {
    multiSet(['answer1', 'answer2']);
  };

  const multiRemoveStorage = (): void => {
    multiRemove(['test2', 'test3']);
  };

  const { container, header, text, textLight, textDark } = styles;
  const theme = {
    text: appearance === 'light' ? textLight : textDark,
  };

  return (
    <SafeAreaView style={container}>
      <Text style={[header, theme.text]}>useShare</Text>
      <Button title="share" onPress={share} />

      <Text style={[header, theme.text]}>useStorage</Text>
      <Text style={[text, theme.text]}>storage: {storage.length > 0 ? storage : 'null'}</Text>
      <Button title="setStorage" onPress={setStorage} />
      <Button title="removeStorage" onPress={removeStorage} />

      <Text style={[header, theme.text]}>useMultiStorage</Text>
      <Text style={[text, theme.text]}>storage: {JSON.stringify(multiValues)}</Text>
      <Button title="setMultiStorage" onPress={multiSetStorage} />
      <Button title="removeMultiStorage" onPress={multiRemoveStorage} />
    </SafeAreaView>
  );
};
export default Page;
