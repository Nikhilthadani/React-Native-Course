import React from "react";
import MainNavigator from "./scripts/navigation";
import { StatusBar } from "react-native";
import AuthProvider from "./scripts/context/AuthProvider";
import { SQLiteProvider } from "expo-sqlite";
import { onErrorInitializingDatabase, onInitDatabase } from "./scripts/sql";
import Fallback from "./scripts/screens/fallback/Fallback";
import { DatabaseName } from "./scripts/utils/constants";
import AppStateProvider from "./scripts/context/AppStateProvider";

export default function App() {
  return (
    <React.Fragment>
      <StatusBar />
      <React.Suspense fallback={<Fallback />}>
        <SQLiteProvider
          databaseName={DatabaseName}
          onInit={onInitDatabase}
          onError={onErrorInitializingDatabase}
        >
          <AuthProvider>
            <AppStateProvider>
              <MainNavigator />
            </AppStateProvider>
          </AuthProvider>
        </SQLiteProvider>
      </React.Suspense>
    </React.Fragment>
  );
}
