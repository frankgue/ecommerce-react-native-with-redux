import React from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import CourseItem from "../components/CourseItem";
import EmptyMsg from "../components/EmptyMsg";
import { addToCart } from "./../redux/actions/actionAddToCart";

const Landing = ({ navigation }) => {
  const existingCourses = useSelector((state) => state.courses.existingCourses);

  const coursesToDisplay = existingCourses.filter(
    (course) => course.selected === false
  );

  const dispatch = useDispatch();
  const handleAddToCart = (course) => {
    dispatch(addToCart(course));
    alert("Formation ajouté au panier");
  };

  if (coursesToDisplay.length) {
    return (
      <FlatList
        data={coursesToDisplay}
        renderItem={({ item }) => (
          <CourseItem
            title={item.title}
            image={item.image}
            price={item.price}
            viewDetails={() =>
              navigation.navigate("Details", {
                courseId: item.id,
                title: item.title,
              })
            }
            onAddToCart={() => handleAddToCart(item)}
          />
        )}
      />
    );
  } else {
    return <EmptyMsg text="Pas de cours a afficher." />;
  }
};

const styles = StyleSheet.create({});

export default Landing;
