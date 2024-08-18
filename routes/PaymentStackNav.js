import globalStyles from "../styles/globalStyles";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import CustomHeaderIcon from "../components/CustomHeaderIcon";
import Payments from "../screens/Payments";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const PaymentsStackNavigator = createNativeStackNavigator();

const PaymentsNavigator = () => {
  return (
    <PaymentsStackNavigator.Navigator
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
              onPress={() => navigation.navigate("Cart")}
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
    >
      <PaymentsStackNavigator.Screen
        name="Payment"
        component={Payments}
        options={{ title: "Mes Achats" }}
      />
    </PaymentsStackNavigator.Navigator>
  );
};

export default PaymentsNavigator;
