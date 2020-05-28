import React from 'react';
import { SafeAreaView, View, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Page: React.FC = () => {
  const navigation = useNavigation();

  const navi = (pageName: string) => (): void => {
    navigation.navigate(pageName);
  };

  return (
    <SafeAreaView>
      <View>
        <Button title="deviceInfo" onPress={navi('DeviceInfo')} />
        <Button title="hooks" onPress={navi('Hooks')} />
        <Button title="Storage" onPress={navi('Storage')} />
        <Button title="webview" onPress={navi('Webview')} />
        <Button title="Map" onPress={navi('Map')} />
        <Button title="Voice" onPress={navi('Voice')} />
        <Button title="CustomHooks" onPress={navi('CustomHooks')} />
        <Button title="Animation" onPress={navi('Animation')} />
        <Button title="Storybook" onPress={navi('Storybook')} />
      </View>
    </SafeAreaView>
  );
};
export default Page;
