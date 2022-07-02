import { StyleSheet, Text, View } from "react-native";
import { AuthProvider } from "./src/providers/AuthProvider";
import Navigation from "./src/navigation/Navigation";
// import AppLoading from "expo-app-loading";
import { useFonts } from "expo-font";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();

export default function App() {
  let [fontsLoaded] = useFonts({
    "Rubik-300": require("./assets/fonts/Rubik-Light.ttf"),
    "Rubik-400": require("./assets/fonts/Rubik-Regular.ttf"),
    "Rubik-500": require("./assets/fonts/Rubik-Medium.ttf"),
    "Rubik-600": require("./assets/fonts/Rubik-SemiBold.ttf"),
    "Rubik-700": require("./assets/fonts/Rubik-Bold.ttf"),
  });

  if (!fontsLoaded) {
    return <Text>Загрузка...</Text>;
  }

  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <Navigation />
      </AuthProvider>
    </QueryClientProvider>
  );
}
