import * as React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";

import Sidebar from "./components/Sidebar";

import MainScreen from "./screens/MainScreen";
import AboutScreen from "./screens/AboutScreen";
import { NavigationContainer } from "@react-navigation/native";

const Drawer = createDrawerNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        useLegacyImplementation={true}
        initialRouteName="Main"
        screenOptions={{
          headerShown: false,
          drawerType: "back",
          swipeEdgeWidth: 200,
          overlayColor: "#00000000",
        }}
        drawerContent={(props) => <Sidebar {...props} />}
      >
        <Drawer.Screen name="Main" component={MainScreen} />
        <Drawer.Screen name="About" component={AboutScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default App;
