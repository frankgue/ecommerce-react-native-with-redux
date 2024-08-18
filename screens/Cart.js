import React from "react";
import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import EmptyMsg from "./../components/EmptyMsg";
import CoursesInCart from "../components/CoursesInCart";
import globalStyles from "../styles/globalStyles";
import { removeCourseCart } from "../redux/actions/actionRemoveCourseCart";
import { addPayment } from "./../redux/actions/actionPayment";

const Cart = ({ navigation, route }) => {
  const cartCourses = useSelector((state) => state.cart.cartCourses);
  const total = useSelector((state) => state.cart.total);

  const dispatch = useDispatch();

  const handleRemove = (idCourse) => {
    dispatch(removeCourseCart(idCourse));
  };

  const handlePayment = (cartCourses, total) => {
    dispatch(addPayment(cartCourses, total));
    alert("Paiement effectué");
  };

  return (
    <View style={[styles.cartContainer]}>
      {cartCourses.length > 0 ? (
        <View>
          <FlatList
            data={cartCourses}
            renderItem={({ item }) => (
              <CoursesInCart
                title={item.title}
                price={item.price}
                onDelete={() => handleRemove(item.id)}
              />
            )}
            keyExtractor={(item) => item.id}
          />

          <View style={styles.totalContainer}>
            <Text style={styles.totalText}>
              Total: <Text style={styles.totalPrice}>{total.toFixed(2)} $</Text>
            </Text>
            <TouchableOpacity onPress={() => handlePayment(cartCourses, total)}>
              <View style={styles.btnAddPayment}>
                <Text style={styles.btnAddPaymentText}>Payer</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      ) : (
        <EmptyMsg text="Panier vide." />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  cartContainer: {
    margin: 20,
  },
  totalContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 19,
  },
  totalText: {
    fontWeight: "bold",
    fontSize: 19,
  },
  totalPrice: {
    color: globalStyles.green,
  },
  btnAddPayment: {
    borderRadius: 6,
    paddingVertical: 9,
    paddingHorizontal: 25,
    backgroundColor: globalStyles.orange,
  },
  btnAddPaymentText: {
    fontSize: 19,
  },
});


export default Cart;
