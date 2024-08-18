import globalStyles from "../styles/globalStyles";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import CustomHeaderIcon from "../components/CustomHeaderIcon";
import { createStackNavigator } from "@react-navigation/stack";
import UserCourses from "../screens/UserCourses";
import UserEditCourse from "../screens/UserEditCourse";

const UserStackNavigator = createStackNavigator();

const UserNavigator = () => {
  return (
    <UserStackNavigator.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: globalStyles.green,
        },
        headerTitleStyle: { fontWeight: "bold" },
        headerTintColor: globalStyles.white,
      }}
    >
      <UserStackNavigator.Screen
        name="Courses"
        component={UserCourses}
        options={({ navigation }) => ({
          title: "Mes Cours",
          headerRight: () => (
            <HeaderButtons HeaderButtonComponent={CustomHeaderIcon}>
              <Item
                title="Editer"
                iconName="library-add"
                onPress={() =>
                  navigation.navigate("Edit", { title: "Creer un cours" })
                }
              />
            </HeaderButtons>
          ),
          headerLeft: () => (
            <HeaderButtons HeaderButtonComponent={CustomHeaderIcon}>
              <Item
                title="Menu"
                iconName="menu"
                onPress={() => navigation.openDrawer()}
              />
            </HeaderButtons>
          ),
        })}
      />
      <UserStackNavigator.Screen
        name="Edit"
        component={UserEditCourse}
        options={({ route }) => ({
          title: route.params.title ? route.params.title : "Editer le cours",
        })}
      />
    </UserStackNavigator.Navigator>
  );
};
export default UserNavigator;
