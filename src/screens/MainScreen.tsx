import React from "react";
import { useColorMode, useColorModeValue, Center } from "native-base";

import ToggleDarkMode from "../components/ToggleDarkMode";

const HomeScreen = () => {
  const { toggleColorMode } = useColorMode();

  return (
    <Center flex="1" bg={useColorModeValue("warmGray.50", "coolGray.800")}>
      <ToggleDarkMode />
    </Center>
  );
};

export default HomeScreen;
