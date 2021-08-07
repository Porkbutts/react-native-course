import React from "react";
import { View, Text, StyleSheet } from "react-native";
import ImageDetail from "../components/ImageDetail";

const ImageScreen = () => (
  <View>
    <ImageDetail title="beach" score={10} imageSource={require('../../assets/beach.jpg')} />
    <ImageDetail title="mountain" score={5} imageSource={require('../../assets/mountain.jpg')} />
    <ImageDetail title="forest" score={7} imageSource={require('../../assets/forest.jpg')} />
  </View>
);

const styles = StyleSheet.create({});

export default ImageScreen;
