import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { View, Text } from 'react-native';
import { Button } from 'react-native-elements';

const style = {
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: '#F5FCFF',
};

const CenteredView = ({ children }) => <View style={style}>{children}</View>;

storiesOf('CenteredView', module).add('first view', () => (
  <CenteredView>
    <Text>Hello Storybook</Text>
  </CenteredView>
));

storiesOf('Button Components', module).add('aaa', () => (
  <CenteredView>
    <Button title="react-native-element-button" />
  </CenteredView>
));
