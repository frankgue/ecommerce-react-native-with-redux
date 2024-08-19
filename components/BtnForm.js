import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import globalStyles from "../styles/globalStyles";

const BtnForm = ({ btnText, activate }) => {
  return (
    <Pressable onPress={handlePress} disabled={activate}>
      <View
        style={{
          ...styles.btnContainer,
          backgroundColor: activate ? globalStyles.orange : globalStyles.green,
        }}
      >
        <Text style={styles.btnText}>{btnText}</Text>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  btnContainer: {
    borderRadius: 6,
    paddingVertical: 9,
    paddingHorizontal: 25,
    backgroundColor: globalStyles.orange,
    marginTop: 20,
  },
  btnText: {
    fontSize: 19,
    textAlign: "center",
  },
});

export default BtnForm;
