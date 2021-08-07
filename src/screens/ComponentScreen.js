import React from "react";
import { Text, StyleSheet, View } from "react-native";

const ComponentScreen = () => {
  const name = 'adrian';
  return (
    <View>
      <Text style={styles.textStyle}>Getting started with react native!</Text>
      <Text style={styles.nameTextStyle}>My name is {name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 45
  },
  nameTextStyle: {
    fontSize: 20
  }
});

export default ComponentScreen;