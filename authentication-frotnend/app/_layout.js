import { Provider as ReduxProvider } from "react-redux";
import AuthProvider from "../context/AuthProvider";
import { Stack } from "expo-router";
import store from "../store";
const RootLayout = () => {
  return (
    <AuthProvider>
      <ReduxProvider store={store}>
        <Stack />
      </ReduxProvider>
    </AuthProvider>
  );
};
export default RootLayout;
