import {
  ADD_TO_CART,
  DELETE_COURSE,
  EDIT_COURSE,
  REMOVE_COURSE_CART,
} from "../constants";
import COURSES from "./../../data/testData";
import CourseModel from "./../../data/CourseModel";

const initialState = {
  existingCourses: COURSES,
  loggedInmemberCourses: COURSES.filter(
    (course) => course.instructorId === "1"
  ),
};

const reducerCourses = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      const indexCourseToModify = state.existingCourses.findIndex(
        (course) => course.id === action.course.id
      );
      const copyExistingsCourses = [...state.existingCourses];
      copyExistingsCourses[indexCourseToModify].selected = true;
      return {
        ...state,
        existingCourses: copyExistingsCourses,
        loggedInmemberCourses: state.loggedInmemberCourses,
      };
    case REMOVE_COURSE_CART:
      const indexCourse = state.existingCourses.findIndex(
        (course) => course.id === action.prodId
      );
      const oldExistingsCourses = [...state.existingCourses];
      oldExistingsCourses[indexCourse].selected = false;
      return {
        ...state,
        existingCourses: oldExistingsCourses,
        loggedInmemberCourses: state.loggedInmemberCourses,
      };
    case DELETE_COURSE:
      return {
        ...state,
        existingCourses: state.existingCourses.filter(
          (course) => course.id !== action.courseId
        ),
        loggedInmemberCourses: state.loggedInmemberCourses.filter(
          (course) => course.id !== action.courseId
        ),
      };
    case EDIT_COURSE:
      const idCourse = action.courseId;
      const indexCourseToUpdate = state.loggedInmemberCourses.findIndex(
        (course) => (course.id === idCourse)
      );

      const updateCourse = new CourseModel(
        idCourse,
        action.updateCourse.title,
        action.updateCourse.img,
        action.updateCourse.desc,
        state.loggedInmemberCourses[indexCourseToUpdate].price,
        state.loggedInmemberCourses[indexCourseToUpdate].selected,
        state.loggedInmemberCourses[indexCourseToUpdate].instructorId
      );

      const newLoggedInmemberCourses = [...state.loggedInmemberCourses];
      newLoggedInmemberCourses[indexCourseToUpdate] = updateCourse;

      const indexExistingCourses = state.existingCourses.findIndex(
        (course) => course.id === idCourse
      );
      const newExistingCourses = [...state.existingCourses];
      newExistingCourses[indexExistingCourses] = updateCourse;
      return {
        ...state,
        existingCourses: newExistingCourses,
        loggedInmemberCourses: newLoggedInmemberCourses,
      };
    default:
      return state;
  }
};

export default reducerCourses;
 