import { AppRegistry } from 'react-native';
import { getStorybookUI, configure } from '@storybook/react-native';

import './rn-addons';

configure(() => {
  require('./stories');
}, module);

const StorybookUIRoot = getStorybookUI({});
AppRegistry.registerComponent('%APP_NAME%', () => StorybookUIRoot);
export default StorybookUIRoot;
