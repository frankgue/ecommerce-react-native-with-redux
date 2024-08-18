import React from "react";
import { Alert, FlatList, StyleSheet, Text, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import EmptyMsg from "../components/EmptyMsg";
import globalStyles from "../styles/globalStyles";
import CoursesEditionsItem from "../components/CoursesEditionsItem";
import { deleteCourse } from "./../redux/actions/actionDeleteCourse";

const UserCourses = ({ navigation }) => {
  const loggedInmemberCourses = useSelector(
    (state) => state.courses.loggedInmemberCourses
  );
  const handleNavigation = (courseId) =>
    navigation.navigate("Edit", { courseId: courseId });

  const dispatch = useDispatch();

  const handleDeleteCourse = (coursedId) => {
    Alert.alert("Attention", "Voulez-vous supprimer ce cours", [
      { text: "NON" },
      { text: "OUI", onPress: () => dispatch(deleteCourse(coursedId)) },
    ]);
  };

  if (loggedInmemberCourses.length) {
    return (
      <FlatList
        data={loggedInmemberCourses}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <CoursesEditionsItem
            course={item}
            goToEdition={() => handleNavigation(item.id)}
            deleteCourse={() => handleDeleteCourse(item.id)}
          />
        )}
      />
    );
  }
  return <EmptyMsg text={"Pas de cours a afficher"} />;
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
});

export default UserCourses;
