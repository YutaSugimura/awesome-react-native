import React from 'react';
import { SearchBar } from 'react-native-elements';
import { ColorSchemeName, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    borderRightColor: '#121212',
    borderTopWidth: 0.9,
    borderBottomWidth: 0.9,
    paddingTop: 12,
    paddingBottom: 12,
    paddingLeft: 6,
    paddingRight: 6,
  },
  containerLight: {
    backgroundColor: '#fff',
  },
  containerDark: {
    backgroundColor: '#232323',
  },
  inputContainer: {
    height: 36,
    borderRadius: 18,
  },
  inputContainerLight: {
    backgroundColor: '#eee',
  },
  inputContainerDark: {
    backgroundColor: '#121212',
  },
  input: {
    fontSize: 15,
  },
  inputLight: {
    color: 'rgba(0, 0, 0, 0.87)',
  },
  inputDark: {
    color: '#fff',
  },
});

interface Props {
  appearance: ColorSchemeName;
  value: string;
  handleChange: (newValue: string) => void;
  onSubmit: () => void;
}

const Components: React.FC<Props> = ({ appearance, value, handleChange, onSubmit }) => {
  const {
    container,
    containerLight,
    containerDark,
    inputContainer,
    inputContainerLight,
    inputContainerDark,
    input,
    inputLight,
    inputDark,
  } = styles;

  const theme = {
    container: appearance === 'light' ? containerLight : containerDark,
    inputContainer: appearance === 'light' ? inputContainerLight : inputContainerDark,
    input: appearance === 'light' ? inputLight : inputDark,
  };

  return (
    <SearchBar
      placeholder="search URL"
      onChangeText={handleChange}
      value={value}
      returnKeyType="search"
      onSubmitEditing={onSubmit}
      lightTheme={appearance === 'light' ? true : false}
      containerStyle={[container, theme.container]}
      inputContainerStyle={[inputContainer, theme.inputContainer]}
      inputStyle={[input, theme.input]}
    />
  );
};
export default Components;
