import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import globalStyles from "../styles/globalStyles";
import AntDesign from "@expo/vector-icons/AntDesign";
import CoursesOverview from "./CoursesOverview";

const PaidItems = ({ totalPrice, date, courseDetails }) => {
  const [isShowing, setIsShowing] = useState(false);
  const handleShow = () => {
    setIsShowing((prevState) => !prevState);
  };

  return (
    <ScrollView style={styles.paidCoursesContainer}>
      <View style={styles.paidCourses}>
        <Text style={styles.totalPaid}>{totalPrice.toFixed(2)} $</Text>
        <Text style={styles.date}>{date}</Text>
      </View>
      <TouchableOpacity style={styles.iconBtn} onPress={handleShow}>
        <AntDesign
          name={isShowing ? "minuscircleo" : "pluscircleo"}
          size={24}
          color={globalStyles.green}
        />
        {isShowing && (
          <View style={styles.detailPaidCourses}>
            {courseDetails.courses.map((course) => (
              <CoursesOverview
                key={course.id}
                title={course.title}
                price={course.price}
              />
            ))}
          </View>
        )}
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  paidCoursesContainer: {
    backgroundColor: globalStyles.white,
    borderRadius: 10,
    margin: 20,
    padding: 15,
  },
  paidCourses: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    marginBottom: 15,
  },
  totalPaid: {
    fontSize: 18,
  },
  date: {
    fontSize: 16,
  },
  iconBtn: {
    alignItems: "flex-end",
  },
  detailPaidCourses: {
    marginTop: 20,
    borderTopColor: globalStyles.green,
    borderTopWidth: 1,
  },
});

export default PaidItems;
