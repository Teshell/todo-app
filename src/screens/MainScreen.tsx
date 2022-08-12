import React, { SetStateAction, useCallback, useState } from "react";
import { useColorModeValue, Center, Text, Fab, Icon } from "native-base";

import shortid from "shortid";

import ThemeToggle from "../components/ThemeToggle";
import TaskList from "../components/TaskList";
import { AntDesign } from "@expo/vector-icons";

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

      <Fab
        position="absolute"
        renderInPortal={false}
        size="sm"
        icon={<Icon color="white" as={<AntDesign name="plus" />} size="sm" />}
        colorScheme={useColorModeValue("blue", "darkBlue")}
        bg={useColorModeValue("blue.500", "blue.400")}
        onPress={() => {
          const id = shortid.generate();
          setData([
            {
              id,
              subject: "",
              done: false,
            },
            ...data,
          ]);

          setEditingItemId(id);
        }}
      />
    </Center>
  );
};

export default MainScreen;
