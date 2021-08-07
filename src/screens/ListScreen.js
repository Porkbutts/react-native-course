import React from "react";
import { Text, StyleSheet, View, FlatList } from "react-native";

const ListScreen = () => {
  const friends = [
    { name: "Friend 1", age: 30 },
    { name: "Friend 2", age: 27 },
    { name: "Friend 3", age: 55 },
    { name: "Friend 4", age: 49 },
    { name: "Friend 5", age: 33 },
  ];
  return (
    <FlatList
      data={friends}
      renderItem={({ item }) => {
        return (
          <Text style={styles.textStyle} key={item.name}>
            name: {item.name}, age: {item.age}
          </Text>
        );
      }}
    />
  );
};

const styles = StyleSheet.create({
  textStyle: {
    marginVertical: 50,
  },
});

export default ListScreen;
