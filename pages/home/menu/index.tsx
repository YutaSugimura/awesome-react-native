import React from 'react';
import { StyleSheet, ScrollView, Text } from 'react-native';
import { Button } from 'react-native-elements';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 18,
  },
  button: {
    paddingTop: 6,
    paddingBottom: 6,
  },
});

interface Props {
  navi: (path: string) => () => void;
}

const Components: React.FC<Props> = ({ navi }) => {
  return (
    <ScrollView scrollsToTop={false} style={styles.container}>
      <Text>Menu</Text>

      <Button title="deviceInfo" onPress={navi('DeviceInfo')} type="clear" style={styles.button} />
      <Button title="hooks" onPress={navi('Hooks')} type="clear" style={styles.button} />
      <Button title="Storage" onPress={navi('Storage')} type="clear" style={styles.button} />
      <Button title="webview" onPress={navi('Webview')} type="clear" style={styles.button} />
      <Button title="Map" onPress={navi('Map')} type="clear" style={styles.button} />
      <Button title="Voice" onPress={navi('Voice')} type="clear" style={styles.button} />
      <Button
        title="CustomHooks"
        onPress={navi('CustomHooks')}
        type="clear"
        style={styles.button}
      />
      <Button title="Animation" onPress={navi('Animation')} type="clear" style={styles.button} />
      <Button title="Storybook" onPress={navi('Storybook')} type="clear" style={styles.button} />
    </ScrollView>
  );
};
export default Components;
