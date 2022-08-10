import React, { useCallback, useState } from "react";
import { useColorModeValue, Center } from "native-base";

import ThemeToggle from "../components/ThemeToggle";
import TaskItem from "../components/TaskItem";

const MainScreen = () => {
  const [subject, setSubject] = useState("Task item");
  const [checked, setChecked] = useState(false);
  const [isEditing, setIsEditing] = useState(false);

  const handlePressCheckBox = useCallback(() => {
    setChecked((prev: any) => {
      return !prev;
    });
  });

  return (
    <Center flex="1" bg={useColorModeValue("blueGray.50", "blueGray.900")}>
      <TaskItem
        checked={checked}
        isEditing={isEditing}
        onToggleCheckBox={handlePressCheckBox}
        onSubjectChange={setSubject}
        onPressLabel={() => setIsEditing(true)}
        onFinishedEditing={() => setIsEditing(false)}
        subject={subject}
      />

      <ThemeToggle />
    </Center>
  );
};

export default MainScreen;
