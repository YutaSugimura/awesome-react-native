import React, { createContext, useContext } from 'react';
import { ColorSchemeName } from 'react-native';

export const ThemeContext = createContext<ColorSchemeName>('light');

interface Props {
  value: ColorSchemeName;
  children: React.ReactNode;
}

const Context: React.SFC<Props> = ({ value, children }) => {
  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
};
export const useAppearance = () => useContext(ThemeContext);
export default Context;
