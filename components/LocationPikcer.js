import { Dimensions, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { Button } from "react-native-paper";
import * as Location from "expo-location";
import LocationPreview from "./LocationPreview";
const getPermissions = async () => {
  let permissions;
  permissions = await Location.requestForegroundPermissionsAsync();
  if (permissions.granted) {
    return true;
  } else {
    if (permissions.canAskAgain) {
      permissions = await Location.requestForegroundPermissionsAsync();
      if (permissions.granted) return true;
    } else {
      return false;
    }
  }
};
const LocationPikcer = () => {
  const [location, setLocation] = useState({ lat: null, lng: null });
  const [fetching, setFetching] = useState(false);
  const pickLocation = async () => {
    const hasPermissions = await getPermissions();
    if (hasPermissions) {
      setFetching(true);
      const location = await Location.getCurrentPositionAsync({
        timeInterval: 5000,
      });
      setLocation({
        lat: location.coords.latitude,
        lng: location.coords.longitude,
      });
      setFetching(false);
    }
  };
  const isLocationReady = () => {
    return Boolean(!fetching && location.lat && location.lng);
  };
  return (
    <View style={styles.conatiner}>
      <Button onPress={pickLocation} icon={"pin"}>
        Get Location
      </Button>
      <View style={styles.locationPreview}>
        {isLocationReady() && (
          <LocationPreview lat={location.lat} lng={location.lng} />
        )}
      </View>
    </View>
  );
};

export default LocationPikcer;

const styles = StyleSheet.create({
  locationPreview: {
    width: Dimensions.get("window").width - 100,
    justifyContent: "center",
    alignItems: "center",
  },
});
