import React from "react";
import MainNavigator from "./scripts/navigation";
import { StatusBar } from "react-native";
import AuthProvider from "./scripts/context/AuthProvider";

export default function App() {
  return (
    <React.Fragment>
      <StatusBar />
      <AuthProvider>
        <MainNavigator />
      </AuthProvider>
    </React.Fragment>
  );
}
