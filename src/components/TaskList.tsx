import { MotiView, AnimatePresence } from "moti";
import React, { useCallback, useRef } from "react";
import {
  PanGestureHandlerProps,
  ScrollView,
} from "react-native-gesture-handler";
import TaskItem from "./TaskItem";

interface TaskItemData {
  id: string;
  subject: string;
  done: boolean;
}

interface TaskItemProps
  extends Pick<PanGestureHandlerProps, "simultaneousHandlers"> {
  data: TaskItemData;
  isEditing: boolean;
  onToggleCheckBox: (item: TaskItemData) => void;
  onPressLabel: (item: TaskItemData) => void;
  onFinishedEditing: (item: TaskItemData) => void;
  onSubjectChange: (item: TaskItemData, newSubject: string) => void;
  onRemove: (item: TaskItemData) => void;
}

interface TaskListProps {
  data: Array<TaskItemData>;
  editingItemId: string | null;
  onToggleCheckBox: (item: TaskItemData) => void;
  onPressLabel: (item: TaskItemData) => void;
  onFinishedEditing: (item: TaskItemData) => void;
  onSubjectChange: (item: TaskItemData, newSubject: string) => void;
  onRemoveItem: (item: TaskItemData) => void;
}

const AnimatedTaskItem = (props: TaskItemProps) => {
  const {
    data,
    isEditing,
    simultaneousHandlers,
    onToggleCheckBox,
    onPressLabel,
    onFinishedEditing,
    onSubjectChange,
    onRemove,
  } = props;

  const handleToggleCheckbox = useCallback(() => {
    onToggleCheckBox(data);
  }, [data, onToggleCheckBox]);

  const handleSubjectChange = useCallback(
    (subject) => {
      onSubjectChange(data, subject);
    },
    [data, onSubjectChange]
  );

  const handleFinishedEditing = useCallback(() => {
    onFinishedEditing(data);
  }, [data, onFinishedEditing]);

  const handlePressLabel = useCallback(() => {
    onPressLabel(data);
  }, [data, onPressLabel]);

  const handleRemoveItem = useCallback(() => {
    onRemove(data);
  }, [data, onRemove]);

  return (
    <MotiView
      w="full"
      from={{
        opacity: 0,
        scale: 0.5,
        marginBottom: -46,
      }}
      animate={{
        opacity: 1,
        scale: 1,
        marginBottom: 0,
      }}
      exit={{
        opacity: 0,
        scale: 0.5,
        marginBottom: -46,
      }}
    >
      <TaskItem
        key={data.id}
        simultaneousHandlers={simultaneousHandlers}
        subject={data.subject}
        isDone={data.done}
        isEditing={isEditing}
        onToggleCheckBox={handleToggleCheckbox}
        onFinishedEditing={handleFinishedEditing}
        onSubjectChange={handleSubjectChange}
        onPressLabel={handlePressLabel}
        onRemove={handleRemoveItem}
      />
    </MotiView>
  );
};

const TaskList = (props: TaskListProps) => {
  const {
    data,
    editingItemId,
    onToggleCheckBox,
    onPressLabel,
    onFinishedEditing,
    onSubjectChange,
    onRemoveItem,
  } = props;

  const scrollRef = useRef(null);

  return (
    <ScrollView style={{ width: "100%" }} ref={scrollRef}>
      <AnimatePresence>
        {data.map((item) => (
          <AnimatedTaskItem
            key={item.id}
            data={item}
            simultaneousHandlers={scrollRef}
            onToggleCheckBox={onToggleCheckBox}
            isEditing={item.id === editingItemId}
            onPressLabel={onPressLabel}
            onFinishedEditing={onFinishedEditing}
            onSubjectChange={onSubjectChange}
            onRemove={onRemoveItem}
          />
        ))}
      </AnimatePresence>
    </ScrollView>
  );
};

export default TaskList;
