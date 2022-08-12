import React, { SetStateAction, useCallback, useState } from "react";
import { useColorModeValue, Center, Text } from "native-base";

import shortid from "shortid";

import ThemeToggle from "../components/ThemeToggle";
import TaskList from "../components/TaskList";

const initialData = [
  {
    id: shortid.generate(),
    subject: "Watch Limitless Movie",
    done: false,
  },

  {
    id: shortid.generate(),
    subject: "Watch Typescript course",
    done: false,
  },
];

const MainScreen = () => {
  const [data, setData] = useState(initialData);
  const [editingItemId, setEditingItemId] = useState<string | null>(null);

  const handlePressCheckBox = useCallback((item) => {
    setData((prevData) => {
      const newData = [...prevData];
      const index = prevData.indexOf(item);

      newData[index] = {
        ...item,
        done: !item.done,
      };

      return newData;
    });
  }, []);

  const handleSubjectChange = useCallback((item, newSubject) => {
    setData((prevData) => {
      const newData = [...prevData];
      const index = prevData.indexOf(item);

      newData[index] = {
        ...item,
        subject: newSubject,
      };

      return newData;
    });
  }, []);

  const handleFinishedEditing = useCallback((_item) => {
    setEditingItemId(null);
  }, []);

  const handlePressLabel = useCallback((item) => {
    setEditingItemId(item.id);
  }, []);

  const handleRemoveItem = useCallback((item) => {
    setData((prevData) => {
      const newData = prevData.filter((i) => i != item);

      return newData;
    });
  }, []);

  return (
    <Center flex="1" bg={useColorModeValue("blueGray.50", "blueGray.900")}>
      <TaskList
        data={data}
        editingItemId={editingItemId}
        onToggleCheckBox={handlePressCheckBox}
        onSubjectChange={handleSubjectChange}
        onPressLabel={handlePressLabel}
        onFinishedEditing={handleFinishedEditing}
        onRemoveItem={handleRemoveItem}
      />

      {/* <TaskItem
        checked={checked}
        isEditing={isEditing}
        onToggleCheckBox={handlePressCheckBox}
        onSubjectChange={setSubject}
        onPressLabel={() => setIsEditing(true)}
        onFinishedEditing={() => setIsEditing(false)}
        subject={subject}
      /> */}

      <ThemeToggle />
    </Center>
  );
};

export default MainScreen;
