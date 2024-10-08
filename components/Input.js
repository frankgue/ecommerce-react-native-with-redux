import React from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";
import globalStyles from "../styles/globalStyles";

const Input = (props) => {
  return (
    <View style={styles.FormControl}>
      <Text style={styles.label}>{props.label}</Text>
      <TextInput
      {...props}
        value={props.value}
        onChangeText={props.onKeyStroke}
        style={styles.input}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  FormControl: {
    width: "100%",
  },
  label: {
    marginVertical: 15,
    color: globalStyles.green,
    fontWeight: "bold",
  },
  input: {
    paddingHorizontal: 9,
    paddingVertical: 9,
    borderColor: globalStyles.green,
    borderWidth: 0.5,
    borderRadius: 6,
  },
});

export default Input;
