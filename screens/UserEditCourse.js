import React, { useReducer } from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import globalStyles from "../styles/globalStyles";
import { useDispatch, useSelector } from "react-redux";
import { editCourse } from "../redux/actions/actionEditCourse";
import { createCourse } from "./../redux/actions/actionCreateCourse";
import { formReducer } from "../formData/formReducer";
import Input from "../components/Input";
import BtnForm from "../components/BtnForm";

const UserEditCourse = ({ route, navigation }) => {
  const courseId = route.params.courseId;
  const myCourse = useSelector((state) =>
    state.courses.loggedInmemberCourses.find((course) => course.id == courseId)
  );

  const dispatch = useDispatch();

  const formInitialState = {
    inputValues: {
      title: myCourse ? myCourse.title : "",
      img: myCourse
        ? myCourse.image
        : "https://cdn.pixabay.com/photo/2021/12/11/21/40/computer-6863693_1280.jpg",
      price: "",
      desc: myCourse ? myCourse.description : "",
    },
    isValidInput: {
      title: myCourse ? true : false,
      img: myCourse ? true : false,
      price: myCourse ? true : false,
      desc: myCourse ? true : false,
    },
    isValidForm: myCourse ? true : false,
  };

  const [formState, formActionDispatch] = useReducer(
    formReducer,
    formInitialState
  );

  const handlePress = () => {
    const { title, img, price, desc } = formState.inputValues;

    if (courseId) {
      //MAJ
      dispatch(editCourse(courseId, title, img, desc));
    } else {
      //CREATION
      dispatch(createCourse(title, desc, img, +price));
    }
    navigation.goBack();
  };

  const inputHandler = (inputName, text) => {
    let isValidInput = false;
    if (text.length > 0) {
      isValidInput = true;
    }
    //Dispacth de l'action
    formActionDispatch({
      type: "INPUT_VALIDATION",
      value: text,
      isValid: isValidInput,
      input: inputName,
    });
  };

  return (
    <ScrollView>
      <View style={styles.FormContainer}>
        <Input
          label="Titre"
          value={formState.inputValues.title}
          onKeyStroke={(text) => inputHandler("title", text)}
        />

        {myCourse ? null : (
          <Input
            label="Prix"
            value={formState.inputValues.price}
            onKeyStroke={(text) => inputHandler("price", text)}
            keyboardType="decimal-pad"
          />
        )}

        <Input
          label="Informations"
          value={formState.inputValues.desc}
          onKeyStroke={(text) => inputHandler("desc", text)}
          multiline
          numberOfLines={5}
        />
        <BtnForm
          btnText={
            formState.isValidForm
              ? "Valider"
              : "Veuillez remplir tous les champs"
          }
          activate={formState.isValidForm ? false : true}
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  FormContainer: {
    backgroundColor: globalStyles.white,
    borderRadius: 9,
    padding: 20,
    margin: 20,
  },
});

export default UserEditCourse;
