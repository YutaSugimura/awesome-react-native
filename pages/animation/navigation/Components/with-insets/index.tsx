import React, { ComponentType } from 'react';
import { SafeAreaConsumer } from 'react-native-safe-area-context';

export type withInsetsProps = {
  insets: {
    bottom: number;
  };
};

const Components = (BaseComponents: ComponentType<any>) => (props: any) => (
  <SafeAreaConsumer>
    {(insets) => <BaseComponents insets={{ bottom: insets?.bottom }} {...props} />}
  </SafeAreaConsumer>
);
export default Components;
