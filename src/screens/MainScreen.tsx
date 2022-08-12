import React, { SetStateAction, useCallback, useState } from "react";
import {
  useColorModeValue,
  Center,
  Text,
  Fab,
  Icon,
  VStack,
} from "native-base";

import shortid from "shortid";

import ThemeToggle from "../components/ThemeToggle";
import TaskList from "../components/TaskList";
import { AntDesign } from "@expo/vector-icons";
import AnimatedColorBox from "../components/AnimatedColorBox";

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
    <AnimatedColorBox
      flex={1}
      w="full"
      bg={useColorModeValue("warmGray.50", "primary.900")}
    >
      <VStack
        flex={1}
        space={1}
        bg={useColorModeValue("warmGray.50", "primary.900")}
        mt="-20px"
        borderTopLeftRadius="20px"
        borderTopRightRadius="20px"
        pt="20px"
      >
        <TaskList
          data={data}
          editingItemId={editingItemId}
          onToggleCheckBox={handlePressCheckBox}
          onSubjectChange={handleSubjectChange}
          onPressLabel={handlePressLabel}
          onFinishedEditing={handleFinishedEditing}
          onRemoveItem={handleRemoveItem}
        />
      </VStack>

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
    </AnimatedColorBox>
  );
};

export default MainScreen;
