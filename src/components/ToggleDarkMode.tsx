import React from "react";

import { useColorMode, Switch, Text, HStack } from "native-base";

const ToggleDarkMode = () => {
  const { toggleColorMode, colorMode } = useColorMode();

  return (
    <HStack alignItems="center" space={2}>
      <Text>Light</Text>
      <Switch onToggle={toggleColorMode} isChecked={colorMode === "dark"} />
      <Text>Dark</Text>
    </HStack>
  );
};

export default ToggleDarkMode;
