import React, { useState } from 'react';
import { SafeAreaView, View, Button, Text, StyleSheet, ColorSchemeName } from 'react-native';
import SideMenu from 'react-native-side-menu';
import Menu from './menu';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList, ParamName } from '../../navigation';
import { useAppearance } from '../../context/Appearance';

const Styles = (theme: ColorSchemeName) =>
  StyleSheet.create({
    safeArea: {
      flex: 1,
    },
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: theme === 'dark' ? '#121212' : '#F5FCFF',
    },
    h1: {
      fontSize: 18,
      fontWeight: 'bold',
      color: theme === 'dark' ? '#fff' : 'rgba(0, 0, 0, 0.87)',
    },
    p: {
      fontSize: 14,
      color: theme === 'dark' ? '#fff' : 'rgba(0, 0, 0, 0.87)',
    },
  });

interface Props {
  navigation: StackNavigationProp<RootStackParamList>;
}

const Page: React.FC<Props> = ({ navigation }) => {
  const appearance = useAppearance();
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggle = (): void => {
    setIsOpen(!isOpen);
  };

  const navi = (pageName: ParamName) => (): void => {
    navigation.navigate(pageName);
    toggle();
  };

  const menu = <Menu navi={navi} />;

  const styles = Styles(appearance);

  return (
    <SafeAreaView style={styles.safeArea}>
      <SideMenu menu={menu} isOpen={isOpen} onChange={setIsOpen}>
        <View style={styles.container}>
          <Text style={styles.h1}>Welcome to Awesome React Native</Text>
          <Text style={styles.p}>Click to open the menu</Text>
          <Button
            title="Open"
            onPress={toggle}
            color={appearance === 'dark' ? '#0396FF' : '#0396FF'}
          />
        </View>
      </SideMenu>
    </SafeAreaView>
  );
};
export default Page;
