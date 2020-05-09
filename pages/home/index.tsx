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
        <Button title="webview" onPress={navi('Webview')} />
        <Button title="Map" onPress={navi('Map')} />
      </View>
    </SafeAreaView>
  );
};
export default Page;
