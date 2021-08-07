import React, { useReducer } from "react";
import { View, Text, Stylesheet, Button } from "react-native";

const reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return { ...state, count: state.count + action.payload };
    case "decrement":
      return { ...state, count: state.count - action.payload };
    default:
      return state;
  }
};

const initialState = { count: 0 };

const CounterScreen = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const counter = state.count;
  console.log(counter);
  return (
    <View>
      <Button
        title="increase"
        onPress={() => dispatch({ type: "increment", payload: 2 })}
      />
      <Button
        title="Decrease"
        onPress={() => dispatch({ type: "decrement", payload: 2 })}
      />
      <Text>{counter}</Text>
    </View>
  );
};

export default CounterScreen;
