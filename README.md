# Awesome React Native Sandbox.

## Setup

```zsh
	yarn install
	cd ios && pod install
	cd ..
	yarn ios  # or android
```

## Packages

## device-info

- [react-native-device-info](https://github.com/react-native-community/react-native-device-info)

## Hooks

- [react-native-community](https://github.com/react-native-community/hooks)

## Storage

- [react-native-community/async-storage](https://github.com/react-native-community/async-storage)

## Webview

- [react-native-webview](https://github.com/react-native-community/react-native-webview)

## Maps

### Geolocation

- [react-native-geolocation](https://github.com/react-native-community/react-native-geolocation)

#### ios

```
	# info.plist

	<key>NSLocationAlwaysAndWhenInUseUsageDescription</key>
	<string></string>
	<key>NSLocationAlwaysUsageDescription</key>
	<string></string>
	<key>NSLocationWhenInUseUsageDescription</key>
	<string></string>
```

xcode > signing&Capabilities > Background Modes

- [x] Location updates

#### android

```
	# android/app/src/main/AndroidManifest.xml

  <uses-permission android:name="android.permission.ACCESS_FINE_LOCATION" />
```

### Maps

- [react-native-maps](https://github.com/react-native-community/react-native-maps)

#### android

```
	# android/app/src/main/AndroidManifest.xml

  <application>
   <!-- You will only need to add this meta-data tag, but make sure it's a child of application -->
   <meta-data
     android:name="com.google.android.geo.API_KEY"
     android:value="Your Google maps API Key Here"/>

   <!-- You will also only need to add this uses-libray tag -->
   <uses-library android:name="org.apache.http.legacy" android:required="false"/>
  </application>
```

## voice

### react-native-community/voice

- [setup](https://github.com/react-native-community/voice)

### react-native-audio-toolkit

- [setup](https://github.com/react-native-community/react-native-audio-toolkit/blob/master/docs/SETUP.md)

#### android

```
	# android/app/src/main/AndroidManifest.xml
	<!-- If you want to play audio from a SD card (i.e. external storage),
    you need to add this permission -->
  <uses-permission android:name="android.permission.READ_EXTERNAL_STORAGE" />

  <!-- If you want to play audio from a URL, you need to add these permissions -->
  <uses-permission android:name="android.permission.INTERNET" />
  <uses-permission android:name="android.permission.ACCESS_NETWORK_STATE" />

  <!-- If you want to record audio, you need to add this permission -->
  <uses-permission android:name="android.permission.RECORD_AUDIO" />

  <!-- If you want to record audio to a SD card (i.e. external storage),
    you need to add this permission -->
  <uses-permission android:name="android.permission.WRITE_EXTERNAL_STORAGE" />

```

## Routing and Navigation

- [react-navigation](https://reactnavigation.org/)

```zsh
	yarn add react-native-reanimated react-native-gesture-handler react-native-screens react-native-safe-area-context @react-native-community/masked-view

	#stack
	yarn add @react-navigation/stack

	# bottom-drawer
	yarn add @react-navigation/drawer

	# bottom-tabs
	yarn add @react-navigation/bottom-tabs
```

## UI

- [react-native-elements](https://react-native-elements.github.io/react-native-elements/)
- [react-native-side-menu](https://github.com/react-native-community/react-native-side-menu)

### Icon

- [react-native-vector-icons](https://github.com/oblador/react-native-vector-icons)

#### ios

```
	# info.plist

  <key>UIAppFonts</key>
	<array>
		<string>AntDesign.ttf</string>
		<string>Entypo.ttf</string>
		<string>EvilIcons.ttf</string>
		<string>Feather.ttf</string>
		<string>FontAwesome.ttf</string>
		<string>FontAwesome5_Brands.ttf</string>
		<string>FontAwesome5_Regular.ttf</string>
		<string>FontAwesome5_Solid.ttf</string>
		<string>Foundation.ttf</string>
		<string>Ionicons.ttf</string>
		<string>MaterialIcons.ttf</string>
		<string>MaterialCommunityIcons.ttf</string>
		<string>SimpleLineIcons.ttf</string>
		<string>Octicons.ttf</string>
		<string>Zocial.ttf</string>
	</array>
```

#### android

```
	# android/app/build.gradle

  apply from: "../../node_modules/react-native-vector-icons/fonts.gradle"
```

## Developer tools

### Storybook

- [storybook](https://storybook.js.org/docs/guides/guide-react-native/)

### Development

- [flipper](https://github.com/facebook/flipper)
