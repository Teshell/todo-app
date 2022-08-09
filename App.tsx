import { NativeBaseProvider } from "native-base";

import theme from "./src/theme";

import Navigator from "./src/";

import "react-native-gesture-handler";

export default function App() {
  return (
    <NativeBaseProvider theme={theme}>
      <Navigator />
    </NativeBaseProvider>
  );
}
