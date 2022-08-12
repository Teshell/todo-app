import {
  HStack,
  themeTools,
  useTheme,
  useColorModeValue,
  Input,
} from "native-base";
import { useCallback } from "react";
import { NativeSyntheticEvent, TextInputChangeEventData } from "react-native";
import { PanGestureHandlerProps } from "react-native-gesture-handler";
import Checkbox from "../utils/Checkbox";
import AnimatedTaskLabel from "./AnimatedTaskLabel";
import SwipeableView from "./SwipeableView";

interface Props extends Pick<PanGestureHandlerProps, "simultaneousHandlers"> {
  subject: string;
  isDone: boolean;
  isEditing: boolean;
  onPressLabel: (event) => void;
  onFinishedEditing: () => void;
  onSubjectChange: (subject: String) => void;
  onToggleCheckBox: () => void;
  onRemove: () => void;
}

const TaskItem = (props: Props) => {
  const {
    subject,
    isDone,
    isEditing,
    simultaneousHandlers,
    onPressLabel,
    onSubjectChange,
    onFinishedEditing,
    onToggleCheckBox,
    onRemove,
  } = props;

  const theme = useTheme();

  const activeTextColor = themeTools.getColor(
    theme,
    useColorModeValue("darkText", "lightText")
  );

  const doneTextColor = themeTools.getColor(
    theme,
    useColorModeValue("muted.400", "muted.600")
  );

  const handleSubjectChange = useCallback(
    (e: NativeSyntheticEvent<TextInputChangeEventData>) => {
      onSubjectChange && onSubjectChange(e.nativeEvent.text);
    },
    [onSubjectChange]
  );

  return (
    <SwipeableView
      simultaneousHandlers={simultaneousHandlers}
      onSwipeLeft={onRemove}
    >
      <HStack
        alignItems="center"
        w="full"
        px={4}
        py={2}
        space={2}
        bg={useColorModeValue("warmGray.50", "primary.900")}
      >
        <Checkbox checked={isDone} onToggleCheckBox={onToggleCheckBox} />

        {isEditing ? (
          <Input
            variant={"unstyled"}
            placeholder="Task"
            fontSize={19}
            px={1}
            autoFocus
            blurOnSubmit
            value={subject}
            onBlur={onFinishedEditing}
            onChange={handleSubjectChange}
          />
        ) : (
          <AnimatedTaskLabel
            strikeThrough={isDone}
            activeTextColor={activeTextColor}
            inactiveTextColor={doneTextColor}
            onPress={onPressLabel}
          >
            {subject}
          </AnimatedTaskLabel>
        )}
      </HStack>
    </SwipeableView>
  );
};

export default TaskItem;
