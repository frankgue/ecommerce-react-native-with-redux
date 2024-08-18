import React, { useState } from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import globalStyles from "../styles/globalStyles";
import { useDispatch, useSelector } from "react-redux";
import { editCourse } from "../redux/actions/actionEditCourse";

const UserEditCourse = ({ route, navigation }) => {
  const courseId = route.params.courseId;
  const myCourse = useSelector((state) =>
    state.courses.loggedInmemberCourses.find((course) => course.id == courseId)
  );

  const dispatch = useDispatch();

  const [title, setTitle] = useState(myCourse ? myCourse.title : "");
  const [img, setImg] = useState(myCourse ? myCourse.image : "");
  const [price, setPrice] = useState("");
  const [desc, setDesc] = useState(myCourse ? myCourse.description : "");

  const handlePress = () => {
    if (courseId) {
      //MAJ
      dispatch(editCourse(courseId, title, img, desc));
    } else {
      //CREATION
      // dispatch()
      alert("creation");
    }
    navigation.goBack()
  };

  return (
    <ScrollView>
      <View style={styles.FormContainer}>
        <View style={styles.FormControl}>
          <Text style={styles.label}>Titre</Text>
          <TextInput
            value={title}
            onChangeText={(text) => setTitle(text)}
            style={styles.input}
          />
        </View>
        <View style={styles.FormControl}>
          <Text style={styles.label}>Image (URL)</Text>
          <TextInput
            value={img}
            onChangeText={(text) => setImg(text)}
            style={styles.input}
          />
        </View>
        {myCourse ? null : (
          <View style={styles.FormControl}>
            <Text style={styles.label}>Prix</Text>
            <TextInput
              value={price}
              onChangeText={(text) => setPrice(text)}
              style={styles.input}
            />
          </View>
        )}
        <View style={styles.FormControl}>
          <Text style={styles.label}>Informations</Text>
          <TextInput
            value={desc}
            onChangeText={(text) => setDesc(text)}
            style={styles.input}
          />
        </View>

        <TouchableOpacity onPress={handlePress}>
          <View style={styles.btnContainer}>
            <Text style={styles.btnText}>Valider</Text>
          </View>
        </TouchableOpacity>
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

export default UserEditCourse;
