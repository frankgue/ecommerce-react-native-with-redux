import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import React from "react";
import { PaymentsNavigator } from "./PaymentStackNav";
import { CoursesNavigator } from "./CoursesStackNav";
import { CartNavigator } from "./CartStackNav";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Landing from "../screens/Landing";

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  <Drawer.Navigator>
    <Drawer.Screen
      name="Home"
      component={CoursesNavigator}
      options={{
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
        title: "Achats",
        drawerIcon: () => (
          <MaterialIcons name="credit-card" size={24} color="black" />
        ),
      }}
    />
  </Drawer.Navigator>;
};

export default DrawerNavigator;
