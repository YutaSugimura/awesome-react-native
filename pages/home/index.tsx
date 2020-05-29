import React, { useState } from 'react';
import { SafeAreaView, View, Button, Text, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import SideMenu from 'react-native-side-menu';
import Menu from './menu';

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});

const Page: React.FC = () => {
  const navigation = useNavigation();
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggle = (): void => {
    setIsOpen(!isOpen);
  };

  const navi = (pageName: string) => (): void => {
    navigation.navigate(pageName);
    toggle();
  };

  const menu = <Menu navi={navi} />;

  return (
    <SafeAreaView style={styles.safeArea}>
      <SideMenu menu={menu} isOpen={isOpen} onChange={setIsOpen}>
        <View style={styles.container}>
          <Text>Welcome to Awesome React Native</Text>
          <Text>Click to open the menu</Text>
          <Button title="Open" onPress={toggle} />
        </View>
      </SideMenu>
    </SafeAreaView>
  );
};
export default Page;
