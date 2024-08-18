import React from "react";
import { NavigationContainer } from "@react-navigation/native";

import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Landing from "../screens/Landing";
import Cart from "../screens/Cart";
import Payments from "../screens/Payments";
import CoursesNavigator from "./CoursesStackNav";
import CartNavigator from "./CartStackNav";
import PaymentsNavigator from "./PaymentStackNav";
import globalStyles from "../styles/globalStyles";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import CustomHeaderIcon from "../components/CustomHeaderIcon";
import UserNavigator from "./UserStackNav";

const Drawer = createDrawerNavigator();

const AppNav = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        screenOptions={({ navigation }) => ({
          headerStyle: {
            backgroundColor: globalStyles.green,
          },
          headerTitleStyle: { fontWeight: "bold" },
          headerTintColor: globalStyles.white,
          headerRight: () => (
            <HeaderButtons HeaderButtonComponent={CustomHeaderIcon}>
              <Item
                title="Panier"
                iconName="shopping-cart"
                // onPress={() => navigation.navigate("Cart")}
              />
            </HeaderButtons>
          ),
          headerLeft: () => (
            <HeaderButtons HeaderButtonComponent={CustomHeaderIcon}>
              <Item
                title="Menu"
                iconName="menu"
                // onPress={() => navigation.navigate("Cart")}
              />
            </HeaderButtons>
          ),
        })}
      >
        <Drawer.Screen
          name="Home"
          component={CoursesNavigator}
          options={{
            headerShown: false,
            title: "Catalogue",
            drawerIcon: () => (
              <MaterialIcons name="menu-book" size={24} color="black" />
            ),
          }}
        />
        <Drawer.Screen
          name="Cart"
          component={CartNavigator}
          options={{
            headerShown: false,
            title: "Panier",
            drawerIcon: () => (
              <MaterialIcons name="shopping-cart" size={24} color="black" />
            ),
          }}
        />
        <Drawer.Screen
          name="Payments"
          component={PaymentsNavigator}
          options={{
            headerShown: false,
            title: "Achats",
            drawerIcon: () => (
              <MaterialIcons name="credit-card" size={24} color="black" />
            ),
          }}
        />
        <Drawer.Screen
          name="My Courses"
          component={UserNavigator}
          options={{
            headerShown: false,
            title: "Mes cours",
            drawerIcon: () => (
              <MaterialIcons name="mic" size={24} color="black" />
            ),
          }}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default AppNav;
