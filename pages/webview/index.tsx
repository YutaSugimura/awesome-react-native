import React, { useContext } from 'react';
import { SafeAreaView, StyleSheet, StatusBar } from 'react-native';
import Webview from './webview';
import { ThemeContext } from '../../utils/Appearance';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

const Page: React.FC = () => {
  const appearance = useContext(ThemeContext);
  const barStyle = appearance === 'light' ? 'dark-content' : 'light-content';

  const { container } = styles;
  return (
    <>
      <StatusBar barStyle={barStyle} />
      <SafeAreaView style={container}>
        <Webview appearance={appearance} />
      </SafeAreaView>
    </>
  );
};
export default Page;
