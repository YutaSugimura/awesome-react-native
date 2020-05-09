import React, { useState, useEffect } from 'react';
import { Dimensions, SafeAreaView, StyleSheet } from 'react-native';
import Geolocation, {
  GeolocationResponse,
  GeolocationError,
} from '@react-native-community/geolocation';
import MapView, { Marker } from 'react-native-maps';
import { Icon } from 'react-native-elements';

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    width,
    height,
  },
  map: {
    flex: 1,
  },
});

const Page: React.FC = () => {
  const [position, setPosition] = useState<GeolocationResponse['coords']>({
    latitude: 35.6828542,
    longitude: 139.7646898,
    accuracy: 0,
    altitude: 0,
    altitudeAccuracy: 0,
    heading: 0,
    speed: 0,
  });

  const ASPECT_RATIO = width / height;
  const LATITUDE_DELTA = 0.01;
  const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;

  useEffect(() => {
    const watchId = Geolocation.watchPosition(
      (position: GeolocationResponse) => setPosition(position.coords),
      (err: GeolocationError) => console.log(err),
      { enableHighAccuracy: true, timeout: 10000, distanceFilter: 1 },
    );
    return (): void => Geolocation.clearWatch(watchId);
  }, []);

  const { container, map } = styles;
  return (
    <SafeAreaView style={container}>
      {position && (
        <MapView
          style={map}
          region={{
            latitude: position.latitude,
            longitude: position.longitude,
            latitudeDelta: LATITUDE_DELTA,
            longitudeDelta: LONGITUDE_DELTA,
          }}
        >
          <Marker
            coordinate={{
              latitude: position.latitude,
              longitude: position.longitude,
            }}
          >
            <Icon name="lens" size={30} color="#fff" />
          </Marker>
          <Marker
            coordinate={{
              latitude: 35.6835542,
              longitude: 139.7646898,
            }}
          />
          <Marker
            coordinate={{
              latitude: 35.6845542,
              longitude: 139.7646898,
            }}
          />
        </MapView>
      )}
    </SafeAreaView>
  );
};
export default Page;
