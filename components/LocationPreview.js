import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import vars from "../env";

const LocationPreview = ({ lat, lng }) => {
  const mapUrl = `https://maps.googleapis.com/maps/api/staticmap?center=${lat},${lng}&zoom=14&size=400x200&maptype=roadmap&markers=color:red%7C${lat},${lng}&key=${vars.googleMapsKey}`;

  return <Image source={{ uri: mapUrl }} style={styles.previewImage} />;
};

export default LocationPreview;

const styles = StyleSheet.create({
  previewImage: {
    width: 400,
    height: 200,
    borderWidth: 2,
    borderColor: "#000",
    borderRadius: 6,
  },
});
