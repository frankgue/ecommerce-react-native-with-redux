import React from "react";
import { StyleSheet, Text, View } from "react-native";
import globalStyles from "../styles/globalStyles";
import { TouchableOpacity } from "react-native-gesture-handler";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { useDispatch } from "react-redux";
import { removeCourseCart } from "./../redux/actions/actionRemoveCourseCart";

const CoursesInCart = (props) => {

  return (
    <View style={styles.coursesContainer}>
      <Text numberOfLines={1} style={styles.courseTitle}>
        {props.title}
      </Text>
      <Text style={styles.coursePrice}>{props.price} $</Text>
      <TouchableOpacity onPress={props.onDelete}>
        <MaterialIcons name="delete" size={24} color={globalStyles.green} on />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  coursesContainer: {
    backgroundColor: globalStyles.white,
    borderRadius: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
    marginBottom: 9,
  },
  courseTitle: {
    width: "60%",
  },
  coursePrice: {
    textAlign: "right",
    paddingRight: 9,
    width: "30%",
  },
});

export default CoursesInCart;
