import React from 'react';
import { useColorScheme } from 'react-native';
import {
  NavigationContainer,
  DarkTheme,
  DefaultTheme,
} from '@react-navigation/native';
import AppearanceProvider from './utils/Appearance';
import Router from './navigation';

const App: React.FC = () => {
  const colorScheme = useColorScheme();

  return (
    <AppearanceProvider value={colorScheme}>
      <NavigationContainer
        theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}
      >
        <Router />
      </NavigationContainer>
    </AppearanceProvider>
  );
};

export default App;
