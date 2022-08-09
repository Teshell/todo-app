import React from "react";
import { useColorModeValue, Center } from "native-base";

import ThemeToggle from "../components/ThemeToggle";
import TaskItem from "../components/TaskItem";
import { useState } from "react";

const MainScreen = () => {
  return (
    <Center flex="1" bg={useColorModeValue("blueGray.50", "blueGray.900")}>
      <TaskItem />

      <ThemeToggle />
    </Center>
  );
};

export default MainScreen;
