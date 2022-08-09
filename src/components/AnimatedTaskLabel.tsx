import React, { useEffect, memo } from "react";

import { Box, HStack, Pressable, Text } from "native-base";
import Animated, {
  interpolateColor,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
  withDelay,
  Easing,
  withSequence,
} from "react-native-reanimated";

interface Props {
  children: React.ReactNode;
  strikeThrough: boolean;
  activeTextColor: string;
  inactiveTextColor: string;
}

const AnimatedHStack = Animated.createAnimatedComponent(HStack);
const AnimatedText = Animated.createAnimatedComponent(Text);

const AnimatedTaskLabel = memo((props: Props) => {
  const { children, activeTextColor, inactiveTextColor, strikeThrough } = props;

  const hstackOffset = useSharedValue(0);
  const hstackAnimatedStyle = useAnimatedStyle(
    () => ({
      transform: [{ translateX: hstackOffset.value }],
    }),
    [strikeThrough]
  );

  const textColorProgress = useSharedValue(0);
  const textColorAnimatedStyle = useAnimatedStyle(
    () => ({
      color: interpolateColor(
        textColorProgress.value,
        [0, 1],
        [activeTextColor, inactiveTextColor]
      ),
    }),
    [strikeThrough, activeTextColor, inactiveTextColor]
  );

  useEffect(() => {
    if (strikeThrough) {
      textColorProgress.value = withDelay(
        1000,
        withTiming(1, { duration: 400 })
      );

      hstackOffset.value = withSequence(
        withTiming(4, { duration: 200 }),
        withTiming(0, { duration: 200 })
      );
    } else {
      textColorProgress.value = withTiming(0, { duration: 400 });
    }
  }, [strikeThrough]);

  return (
    <Pressable>
      <AnimatedHStack alignItems="center" style={[hstackAnimatedStyle]}>
        <AnimatedText
          fontSize={19}
          noOfLines={1}
          isTruncated
          px={1}
          style={[textColorAnimatedStyle]}
        >
          {children}
        </AnimatedText>
        <Box position="absolute" h={1} borderBottomWidth={1} />
      </AnimatedHStack>
    </Pressable>
  );
});

export default AnimatedTaskLabel;