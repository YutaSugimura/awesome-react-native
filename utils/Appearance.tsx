import React, { createContext } from 'react';
import { ColorSchemeName } from 'react-native';

export const ThemeContext = createContext<ColorSchemeName>('light');

interface Props {
  value: ColorSchemeName;
  children: React.ReactNode;
}

const Context: React.SFC<Props> = ({ value, children }) => {
  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
};
export default Context;
