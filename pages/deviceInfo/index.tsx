import React from 'react';
import { SafeAreaView, View, Text, StyleSheet, Alert, Button } from 'react-native';
import DeviceInfo from 'react-native-device-info';
import { useAppearance } from '../../context/Appearance';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  text: {
    fontSize: 15,
  },
  textLight: {
    color: 'rgba(0, 0, 0, 0.87)',
  },
  textDark: {
    color: '#fff',
  },
});

const Page: React.FC = () => {
  const appearance = useAppearance();

  const appName = DeviceInfo.getApplicationName();
  const brand = DeviceInfo.getBrand();
  const buildNumber = DeviceInfo.getBuildNumber();
  const bundleId = DeviceInfo.getBundleId();
  const deviceId = DeviceInfo.getDeviceId();
  const deviceType = DeviceInfo.getDeviceType();
  const model = DeviceInfo.getModel();
  const uniqueId = DeviceInfo.getUniqueId();

  const func1 = (): void => {
    DeviceInfo.getBuildId().then((buildId) => {
      Alert.alert(`buildId: ${buildId}`);
    });
  };

  const func2 = (): void => {
    DeviceInfo.getBatteryLevel().then((batteryLevel) => {
      Alert.alert(`batteryLevel: ${batteryLevel}`);
    });
  };

  const func3 = (): void => {
    DeviceInfo.getCarrier().then((carrier) => {
      Alert.alert(`carrier: ${carrier}`);
    });
  };

  const func4 = (): void => {
    DeviceInfo.getDeviceName().then((deviceName) => {
      Alert.alert(`deviceName: ${deviceName}`);
    });
  };

  const func5 = (): void => {
    DeviceInfo.getFontScale().then((fontScale) => {
      Alert.alert(`fontScale: ${fontScale}`);
    });
  };

  const func6 = (): void => {
    DeviceInfo.getFreeDiskStorage().then((freeDiskStorage) => {
      Alert.alert(`freeDiskStorage: ${freeDiskStorage / 1024 / 1024 / 1024}GB`);
    });
  };

  const func7 = (): void => {
    DeviceInfo.getIpAddress().then((ip) => {
      Alert.alert(`IPAddress: ${ip}`);
    });
  };

  const func8 = (): void => {
    DeviceInfo.getTotalMemory().then((totalMemory) => {
      Alert.alert(`totalMemory: ${totalMemory / 1024 / 1024 / 1024}GB`);
    });
  };

  const func9 = (): void => {
    DeviceInfo.getUsedMemory().then((usedMemory) => {
      Alert.alert(`usedMemory: ${usedMemory / 1024 / 1024 / 1024}GB`);
    });
  };

  const func10 = (): void => {
    DeviceInfo.isBatteryCharging().then((isCharging) => {
      Alert.alert(`isCharging: ${isCharging}`);
    });
  };

  const { container, text, textLight, textDark } = styles;

  const theme = {
    text: appearance === 'light' ? textLight : textDark,
  };

  return (
    <SafeAreaView style={container}>
      <View style={container}>
        <Text style={[text, theme.text]}>appName: {appName}</Text>
        <Text style={[text, theme.text]}>brand: {brand}</Text>
        <Text style={[text, theme.text]}>buildNumber: {buildNumber}</Text>
        <Text style={[text, theme.text]}>bundleId: {bundleId}</Text>
        <Text style={[text, theme.text]}>deviceId: {deviceId}</Text>
        <Text style={[text, theme.text]}>deviceType: {deviceType}</Text>
        <Text style={[text, theme.text]}>model: {model}</Text>
        <Text style={[text, theme.text]}>uniqueId: {uniqueId}</Text>

        <Button title="buildId" onPress={func1} />
        <Button title="batteryLevel" onPress={func2} />
        <Button title="carrier" onPress={func3} />
        <Button title="deviceName" onPress={func4} />
        <Button title="fontScale" onPress={func5} />
        <Button title="freeDiskStorage" onPress={func6} />
        <Button title="IPAddress" onPress={func7} />
        <Button title="totalMemory" onPress={func8} />
        <Button title="usedMemory" onPress={func9} />
        <Button title="isCharging" onPress={func10} />
      </View>
    </SafeAreaView>
  );
};
export default Page;
