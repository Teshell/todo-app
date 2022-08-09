import {
  Text,
  HStack,
  themeTools,
  useTheme,
  useColorModeValue,
  Box,
} from "native-base";
import { useState } from "react";
import Checkbox from "../utils/Checkbox";
import AnimatedTaskLabel from "./AnimatedTaskLabel";

const TaskItem = () => {
  const [isDone, setIsDone] = useState(false);

  const theme = useTheme();

  const activeTextColor = themeTools.getColor(
    theme,
    useColorModeValue("darkText", "lightText")
  );

  const doneTextColor = themeTools.getColor(
    theme,
    useColorModeValue("muted.400", "muted.600")
  );

  return (
    <HStack
      alignItems="center"
      w="full"
      px={4}
      py={2}
      space={2}
      bg={useColorModeValue("warmGray.50", "primary.900")}
    >
      <Checkbox isDone={isDone} setIsDone={setIsDone} />
      <AnimatedTaskLabel
        strikeThrough={isDone}
        activeTextColor={activeTextColor}
        inactiveTextColor={doneTextColor}
      >
        Task item
      </AnimatedTaskLabel>
    </HStack>
  );
};

export default TaskItem;
