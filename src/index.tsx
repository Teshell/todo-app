import * as React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";

import MainScreen from "./screens/MainScreen";
import AboutScreen from "./screens/AboutScreen";
import { NavigationContainer } from "@react-navigation/native";

const Drawer = createDrawerNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator useLegacyImplementation={true} initialRouteName="Tasks">
        <Drawer.Screen name="Tasks" component={MainScreen} />
        <Drawer.Screen name="About" component={AboutScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default App;
