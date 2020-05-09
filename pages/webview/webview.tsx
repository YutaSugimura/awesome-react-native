import React, { useCallback, useState, useEffect } from 'react';
import { View, StyleSheet, Linking, ColorSchemeName } from 'react-native';
import { WebView } from 'react-native-webview';
import { WebViewNativeEvent } from 'react-native-webview/lib/WebViewTypes';
import Search from './search';
import Bar from './bar';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  webview: {
    flex: 1,
  },
});

interface Props {
  appearance: ColorSchemeName;
}

const Components: React.FC<Props> = ({ appearance }) => {
  let wvRef: any = React.createRef();

  const [uri, setUri] = useState<string>('https://google.com');
  const [searchUrl, setSearchUrl] = useState<string>(uri);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [currentUrl, setCurrentUrl] = useState<string>(uri);
  const [canGoBack, setCanGoBack] = useState<boolean>(false);
  const [canGoForward, setCanGoForward] = useState<boolean>(false);

  const handleChange = (newValue: string): void => {
    setSearchUrl(newValue);
  };

  const onSubmit = (): void => {
    if (searchUrl.length > 0) {
      setUri(searchUrl);
    }
  };

  useEffect(() => {
    setSearchUrl(currentUrl);
  }, [currentUrl]);

  const reload = (): void => {
    if (isLoading) {
      return wvRef.stopLoading();
    }
    return wvRef.reload();
  };

  const goBack = (): void => {
    wvRef.goBack();
  };

  const goForward = (): void => {
    wvRef.goForward();
  };

  const link = useCallback(async () => {
    const supported = await Linking.canOpenURL(currentUrl);

    if (supported) {
      await Linking.openURL(currentUrl);
    }
  }, [currentUrl]);

  const methods = {
    reload: {
      isLoading,
      func: reload,
    },
    goBack: {
      canGoBack,
      func: goBack,
    },
    goForward: {
      canGoForward,
      func: goForward,
    },
    link: link,
  };

  const { container, webview } = styles;
  return (
    <View style={container}>
      <Search
        appearance={appearance}
        value={searchUrl}
        handleChange={handleChange}
        onSubmit={onSubmit}
      />
      <WebView
        ref={(ref: any) => (wvRef = ref)}
        source={{ uri }}
        style={webview}
        onNavigationStateChange={(navState: WebViewNativeEvent): void => {
          setIsLoading(navState.loading);
          setCurrentUrl(navState.url);
          setCanGoBack(navState.canGoBack);
          setCanGoForward(navState.canGoForward);
        }}
      />
      <Bar methods={methods} appearance={appearance} />
    </View>
  );
};
export default Components;
