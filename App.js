import { Provider as ReduxProvider } from "react-redux";
import MainNavigator from "./navigation";
import store from "./store";
import { Fragment, useCallback } from "react";
import { StatusBar, View } from "react-native";
import { useFonts } from "expo-font";
import RobotoSlab from "./assets/fonts/RobotoSlab.ttf";
import WorkSansItalic from "./assets/fonts/WorkSans-Italic.ttf";
import WorkSans from "./assets/fonts/WorkSans.ttf";
import * as SplashScreen from "expo-splash-screen";

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [fontsLoaded, fontError] = useFonts({
    RobotoSlab: RobotoSlab,
    WorkSansItalic: WorkSansItalic,
    WorkSans: WorkSans,
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded || fontError) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontError]);

  if (!fontsLoaded && !fontError) {
    return null;
  }

  return (
    <Fragment>
      <StatusBar />
      <View style={{ flex: 1 }} onLayout={onLayoutRootView}>
        <ReduxProvider store={store}>
          <MainNavigator />
        </ReduxProvider>
      </View>
    </Fragment>
  );
}
