import { StyleSheet, View } from "react-native";
import { Provider } from "react-redux";
import store from "./redux/store";
import AppNav from "./routes/AppNav";
import { GestureHandlerRootView } from "react-native-gesture-handler";

export default function App() {
  return (
    <GestureHandlerRootView>
      <Provider store={store}>
        <AppNav />
      </Provider>
    </GestureHandlerRootView>
  );
}
