import React, { useState } from "react";
import { StyleSheet, View, Pressable } from "react-native";
import AnimatedCheckbox from "react-native-checkbox-reanimated";

interface Props {
  checked: boolean;
  onToggleCheckBox?: () => void;
}

export default function Checkbox(props: Props) {
  const { checked, onToggleCheckBox } = props;

  return (
    <View>
      <Pressable style={styles.checkbox} onPress={onToggleCheckBox}>
        <AnimatedCheckbox
          checked={checked}
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
