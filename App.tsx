import { NativeBaseProvider, extendTheme } from "native-base";

import MainScreen from "./src/screens/MainScreen";

import Navigator from "./src/";

import "react-native-gesture-handler";

// Define the config
const config = {
  useSystemColorMode: false,
  initialColorMode: "light",
};

// extend the theme
const customTheme = extendTheme({ config });

export default function App() {
  return (
    <NativeBaseProvider theme={customTheme}>
      <Navigator />
    </NativeBaseProvider>
  );
}
