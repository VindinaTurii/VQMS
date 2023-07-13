import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SelectionPageP from "./screens/SelectionPageP";
import QueueDashboardA from "./screens/QueueDashboardA";
import QueueDashboardB from "./screens/QueueDashboardB";
import BanksSelectionP from "./screens/BanksSelectionP";
import QueuedDashboardC from "./screens/QueuedDashboardC";
import LandingPageP from "./screens/LandingPageP";

const Stack = createNativeStackNavigator();

const App = () => {
  const [hideSplashScreen, setHideSplashScreen] = React.useState(true);
  const [fontsLoaded, error] = useFonts({
    // Update the font imports here
    Roboto_regular: require("./assets/fonts/Roboto_regular.ttf"),
    Roboto_medium: require("./assets/fonts/Roboto_medium.ttf"),
    Roboto_bold: require("./assets/fonts/Roboto_bold.ttf"),
    Inter_light: require("./assets/fonts/Inter_light.ttf"),
    Inter_medium: require("./assets/fonts/Inter_medium.ttf"),
    Inter_semibold: require("./assets/fonts/Inter_semibold.ttf"),
    Inter_bold: require("./assets/fonts/Inter_bold.ttf"),
    Inter_extrabold: require("./assets/fonts/Inter_extrabold.ttf"),
    Montserrat_medium: require("./assets/fonts/Montserrat_medium.ttf"),
    Poppins_medium: require("./assets/fonts/Poppins_medium.ttf"),
  });

  if (!fontsLoaded && !error) {
    return null;
  }

  return (
    <NavigationContainer>
      {hideSplashScreen ? (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen
            name="SelectionPageP"
            component={SelectionPageP}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="QueueDashboardA"
            component={QueueDashboardA}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="QueueDashboardB"
            component={QueueDashboardB}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="BanksSelectionP"
            component={BanksSelectionP}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="QueuedDashboardC"
            component={QueuedDashboardC}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="LandingPageP"
            component={LandingPageP}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      ) : null}
    </NavigationContainer>
  );
};

export default App;
