import React, { useState } from "react";
import { Text, StyleSheet, View, Button, FlatList } from "react-native";

const ColorScreen = () => {
  const [colors, setColors] = useState([]);
  console.log(colors);

  return (
    <View>
      <Button
        title="Add a color"
        onPress={() => setColors([...colors, randomRGB()])}
      ></Button>
      <FlatList
        data={colors}
        renderItem={({ item }) => (
          <View key={item} style={{ height: 100, width: 100, backgroundColor: item }} />
        )}
      />
    </View>
  );
};

const randomRGB = () => {
  const rgb = Array(3)
    .fill()
    .map(() => Math.floor(Math.random() * 256));

  return `rgb(${rgb.join(",")})`;
};

const styles = StyleSheet.create({});

export default ColorScreen;
