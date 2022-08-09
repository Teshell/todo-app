import React, { useState } from "react";
import { StyleSheet, View, Pressable } from "react-native";
import AnimatedCheckbox from "react-native-checkbox-reanimated";

interface Props {
  isDone: boolean;
  setIsDone?: () => void;
}

export default function Checkbox(props: Props) {
  const { isDone, setIsDone } = props;

  const onToggleCheckbox = () => {
    setIsDone((prev: any) => {
      return !prev;
    });
  };

  return (
    <View>
      <Pressable style={styles.checkbox} onPress={onToggleCheckbox}>
        <AnimatedCheckbox
          checked={isDone}
          highlightColor="#bfbfe1"
          checkmarkColor="#ffffff"
          boxOutlineColor="#bfbfe1"
        />
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  checkbox: {
    width: 25,
    height: 25,
  },
});
