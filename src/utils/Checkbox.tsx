import React, { useState } from "react";
import { StyleSheet, View, Pressable } from "react-native";
import AnimatedCheckbox from "react-native-checkbox-reanimated";

interface Props {
  isDone: boolean;
  onToggleCheckBox?: () => void;
}

export default function Checkbox(props: Props) {
  const { isDone, onToggleCheckBox } = props;

  return (
    <View>
      <Pressable style={styles.checkbox} onPress={onToggleCheckBox}>
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
