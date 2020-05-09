import React, { useState, useEffect } from 'react';
import { View, TouchableOpacity, StyleSheet, ColorSchemeName } from 'react-native';
import { Icon } from 'react-native-elements';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  box: {
    height: 60,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const iconColor = {
  lightTheme: {
    disabledColor: 'rgba(0, 0, 0, 0.3)',
    color: '#000',
  },
  darkTheme: {
    disabledColor: 'rgba(255, 255, 255, 0.3)',
    color: '#fff',
  },
};

interface Props {
  appearance: ColorSchemeName;
  methods: {
    reload: {
      isLoading: boolean;
      func: () => void;
    };
    goBack: {
      canGoBack: boolean;
      func: () => void;
    };
    goForward: {
      canGoForward: boolean;
      func: () => void;
    };
    link: () => void;
  };
}

type reloadIcon = 'close' | 'refresh';

const Components: React.FC<Props> = ({ methods, appearance }) => {
  const { lightTheme, darkTheme } = iconColor;

  const { reload, goBack, goForward, link } = methods;

  const [backIconColor, setBackIconColor] = useState<string>(lightTheme.disabledColor);
  const [forwardIconColor, setForwardIconColor] = useState<string>(lightTheme.disabledColor);
  const [reloadIconColor, setReloadIconColor] = useState<string>(lightTheme.disabledColor);
  const [publicIconColor, setPublicIconColor] = useState<string>(lightTheme.disabledColor);
  const [reloadIcon, setReloadIcon] = useState<reloadIcon>('close');

  useEffect(() => {
    if (reload.isLoading) {
      setReloadIcon('close');
    } else {
      setReloadIcon('refresh');
    }

    if (appearance === 'light') {
      setReloadIconColor(lightTheme.color);
      setPublicIconColor(lightTheme.color);

      if (goBack.canGoBack) {
        setBackIconColor(lightTheme.color);
      } else {
        setBackIconColor(lightTheme.disabledColor);
      }

      if (goForward.canGoForward) {
        setForwardIconColor(lightTheme.color);
      } else {
        setForwardIconColor(lightTheme.disabledColor);
      }
    }

    if (appearance === 'dark') {
      setReloadIconColor(darkTheme.color);
      setPublicIconColor(darkTheme.color);

      if (goBack.canGoBack) {
        setBackIconColor(darkTheme.color);
      } else {
        setBackIconColor(darkTheme.disabledColor);
      }

      if (goForward.canGoForward) {
        setForwardIconColor(darkTheme.color);
      } else {
        setForwardIconColor(darkTheme.disabledColor);
      }
    }
  }, [appearance, goBack.canGoBack, goForward.canGoForward, reload.isLoading]);

  const { container, box } = styles;
  return (
    <View style={container}>
      <TouchableOpacity onPress={goBack.func} style={box}>
        <Icon name="chevron-left" size={24} color={backIconColor} />
      </TouchableOpacity>
      <TouchableOpacity onPress={goForward.func} style={box}>
        <Icon name="chevron-right" size={24} color={forwardIconColor} />
      </TouchableOpacity>
      <TouchableOpacity onPress={reload.func} style={box}>
        <Icon name={reloadIcon} size={24} color={reloadIconColor} />
      </TouchableOpacity>
      <TouchableOpacity onPress={link} style={box}>
        <Icon name="public" size={24} color={publicIconColor} />
      </TouchableOpacity>
    </View>
  );
};
export default Components;
