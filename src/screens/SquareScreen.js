import React, { useReducer } from "react";
import { Text, StyleSheet, View, Button, FlatList } from "react-native";
import ColorCounter from "../components/ColorCounter";

const SquareScreen = () => {
  const [state, dispatch] = useReducer(
    (state, { color, amount }) => {
      switch (color) {
        case "red":
          return state.red + amount > 255 || state.red + amount < 0
            ? state
            : { ...state, red: state.red + amount };
        case "green":
          return state.green + amount > 255 || state.green + amount < 0
            ? state
            : { ...state, green: state.green + amount };
        case "blue":
          return state.blue + amount > 255 || state.blue + amount < 0
            ? state
            : { ...state, blue: state.blue + amount };
        default:
          return state;
      }
    },
    { red: 0, green: 0, blue: 0 }
  );

  const step = 15;
  const { red, green, blue } = state;

  return (
    <View>
      <ColorCounter
        color="Red"
        onIncrease={() => dispatch({ color: "red", amount: step })}
        onDecrease={() => dispatch({ color: "red", amount: -1 * step })}
      />
      <ColorCounter
        color="Green"
        onIncrease={() => dispatch({ color: "green", amount: step })}
        onDecrease={() => dispatch({ color: "green", amount: -1 * step })}
      />
      <ColorCounter
        color="Blue"
        onIncrease={() => dispatch({ color: "blue", amount: step })}
        onDecrease={() => dispatch({ color: "blue", amount: -1 * step })}
      />
      <View
        style={{
          height: 100,
          width: 100,
          backgroundColor: `rgb(${red}, ${green}, ${blue})`,
        }}
      ></View>
    </View>
  );
};

const styles = StyleSheet.create({});

export default SquareScreen;
