import React from "react";
import { StyleSheet, View } from "react-native";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import globalStyles from "../styles/globalStyles";
import { HeaderButton } from "react-navigation-header-buttons";

const CustomHeaderIcon = (props) => {
  return (
    <HeaderButton
      {...props}
      IconComponent={MaterialIcons}
      iconSize={24}
      color={globalStyles.white} 
    />
  );
};

const styles = StyleSheet.create({});

export default CustomHeaderIcon;
