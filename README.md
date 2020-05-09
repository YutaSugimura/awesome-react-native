## Webview

### ブラウザー

#### react-native-webview

https://github.com/react-native-community/react-native-webview

## Maps

### 位置情報取得

#### react-native-geolocation

https://github.com/react-native-community/react-native-geolocation

ios

```info.plist
	<key>NSLocationAlwaysAndWhenInUseUsageDescription</key>
	<string></string>
	<key>NSLocationAlwaysUsageDescription</key>
	<string></string>
	<key>NSLocationWhenInUseUsageDescription</key>
	<string></string>
```

```xcode > signing&Capabilities > Background Modes
check Location updates
```

android

```android/app/src/main/AndroidManifest.xml
  <uses-permission android:name="android.permission.ACCESS_FINE_LOCATION" />
```

### マップ

#### react-native-maps

https://github.com/react-native-community/react-native-maps

android

```android/app/src/main/AndroidManifest.xml
  <application>
   <!-- You will only need to add this meta-data tag, but make sure it's a child of application -->
   <meta-data
     android:name="com.google.android.geo.API_KEY"
     android:value="Your Google maps API Key Here"/>

   <!-- You will also only need to add this uses-libray tag -->
   <uses-library android:name="org.apache.http.legacy" android:required="false"/>
  </application>
```

## Routing and Navigation

#### react-navigation

https://reactnavigation.org/

```zsh
yarn add react-native-reanimated react-native-gesture-handler react-native-screens react-native-safe-area-context @react-native-community/masked-view

#stack
yarn add @react-navigation/stack

# bottom-drawer
yarn add @react-navigation/drawer

# bottom-tabs
yarn add @react-navigation/bottom-tabs
```

## Styling

### スタイルコンポーネント

#### react-native-elements

https://react-native-elements.github.io/react-native-elements/

### Icon

#### react-native-vector-icons

https://github.com/oblador/react-native-vector-icons

ios

```info.plist
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

android

```android/app/build.gradle
  apply from: "../../node_modules/react-native-vector-icons/fonts.gradle"
```
