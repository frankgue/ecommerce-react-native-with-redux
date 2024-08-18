import React from "react";
import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import globalStyles from "../styles/globalStyles";
import AntDesign from "@expo/vector-icons/AntDesign";

const CoursesEditionsItem = ({ course, deleteCourse, goToEdition }) => {
  return (
    <View style={styles.courseContainer}>
      <View style={styles.courseInfo}>
        <Text numberOfLines={1} style={styles.courseTitle}>
          {course.title}
        </Text>
        <Text style={styles.coursePrice}>{course.price} $</Text>
      </View>
      <View style={styles.btnIcons}>
        <TouchableOpacity onPress={goToEdition} style={styles.touchableIcon}>
          <AntDesign name="edit" size={24} color={globalStyles.green} />
        </TouchableOpacity>
        <TouchableOpacity onPress={deleteCourse} style={styles.touchableIcon}>
          <AntDesign name="delete" size={24} color={globalStyles.green} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  courseContainer: {
    backgroundColor: globalStyles.white,
    borderRadius: 10,
    marginVertical: 9,
    marginHorizontal: 17,
    paddingTop: 15,
    paddingBottom: 15,
    paddingRight: 9,
    paddingLeft: 9,
  },
  courseInfo: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 9,
    paddingHorizontal: 9,
  },
  courseTitle: {
    width: "80%",
  },
  coursePrice: {
    color: globalStyles.green,
  },
  btnIcons: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  touchableIcon: { padding: 9 },
});

export default CoursesEditionsItem;
