import React from 'react';
import { StyleSheet, ScrollView, Text, ColorSchemeName } from 'react-native';
import { Button } from 'react-native-elements';
import { ParamName } from '../../../navigation';
import { useAppearance } from '../../../context/Appearance';

const Styles = (theme: ColorSchemeName) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme === 'dark' ? '#424242' : '#fff',
      padding: 18,
    },
    title: {
      fontSize: 24,
      fontWeight: 'bold',
      color: theme === 'dark' ? '#fff' : 'rgba(0, 0, 0, 0.87)',
      textAlign: 'center',
      paddingBottom: 12,
    },
    buttonContainer: {
      paddingTop: 3,
      paddingBottom: 3,
    },
    buttonTitle: {
      color: theme === 'dark' ? '#fff' : '#0069c0',
    },
  });

interface Props {
  navi: (path: ParamName) => () => void;
}

const Components: React.FC<Props> = ({ navi }) => {
  const appearance = useAppearance();
  const lists: ParamName[] = [
    'DeviceInfo',
    'Hooks',
    'Storage',
    'Webview',
    'Map',
    'Voice',
    'VoiceRecord',
    'CustomHooks',
    'Animation',
    'Storybook',
  ];
  const styles = Styles(appearance);
  return (
    <ScrollView scrollsToTop={false} style={styles.container}>
      <Text style={styles.title}>Menu</Text>

      {lists.map((screenName, index) => (
        <Button
          key={index}
          title={screenName}
          onPress={navi(screenName)}
          type="clear"
          containerStyle={styles.buttonContainer}
          titleStyle={styles.buttonTitle}
        />
      ))}
    </ScrollView>
  );
};
export default Components;
