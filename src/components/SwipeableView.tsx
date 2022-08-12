import { Box, Icon } from "native-base";
import React from "react";
import {
  PanGestureHandler,
  PanGestureHandlerGestureEvent,
  PanGestureHandlerProps,
} from "react-native-gesture-handler";

import { Feather } from "@expo/vector-icons";

import Animated, {
  useAnimatedGestureHandler,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
  runOnJS,
} from "react-native-reanimated";
import { Dimensions } from "react-native";

interface Props extends Pick<PanGestureHandlerProps, "simultaneousHandlers"> {
  children: React.ReactNode;
  onSwipeLeft?: () => void;
}

const { width: SCREEN_WIDTH } = Dimensions.get("window");
const SWIPE_THRESHOLD = -SCREEN_WIDTH * 0.2;

const AnimatedBox = Animated.createAnimatedComponent(Box);

const SwipeableView = (props: Props) => {
  const { children, simultaneousHandlers, onSwipeLeft } = props;

  const translateX = useSharedValue(0);

  const panGesture = useAnimatedGestureHandler<PanGestureHandlerGestureEvent>({
    onActive: (event) => {
      translateX.value = Math.max(-128, Math.min(0, event.translationX));
    },
    onEnd: () => {
      const shouldBeDismissed = translateX.value < SWIPE_THRESHOLD;

      if (shouldBeDismissed) {
        translateX.value = withTiming(-SCREEN_WIDTH);

        onSwipeLeft && runOnJS(onSwipeLeft)();
      } else {
        translateX.value = withTiming(0);
      }
    },
  });

  const facadeStyle = useAnimatedStyle(() => ({
    transform: [
      {
        translateX: translateX.value,
      },
    ],
  }));

  const rIconContainerStyle = useAnimatedStyle(() => {
    const opacity = withTiming(translateX.value < SWIPE_THRESHOLD ? 1 : 0.6);

    return { opacity };
  });

  return (
    <Box w="full" pr={4}>
      <AnimatedBox
        position="absolute"
        w="full"
        h="full"
        bg="red.500"
        alignItems="flex-end"
        justifyContent="center"
        pr={4}
        borderRadius={"md"}
        style={[rIconContainerStyle]}
      >
        <Icon color="white" as={<Feather name="trash-2" />} size="sm" />
      </AnimatedBox>
      <PanGestureHandler
        simultaneousHandlers={simultaneousHandlers}
        onGestureEvent={panGesture}
      >
        <AnimatedBox style={[facadeStyle]}>{children}</AnimatedBox>
      </PanGestureHandler>
    </Box>
  );
};

export default SwipeableView;
