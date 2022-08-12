import React, { useCallback } from "react";

import {
  VStack,
  useColorModeValue,
  Heading,
  Avatar,
  Center,
} from "native-base";
import AnimatedColorBox from "./AnimatedColorBox";
import { DrawerContentComponentProps } from "@react-navigation/drawer";
import ToggleDarkMode from "./ThemeToggle";
import MenuButton from "./MenuButton";

const Sidebar = (props: DrawerContentComponentProps) => {
  const { state, navigation } = props;
  const currentRoute = state.routeNames[state.index];

  const handlePressMenuMain = useCallback(() => {
    navigation.navigate("Main");
  }, [navigation]);

  const handlePressMenuAbout = useCallback(() => {
    navigation.navigate("About");
  }, [navigation]);

  return (
    <AnimatedColorBox
      safeArea
      flex={1}
      p={7}
      bg={useColorModeValue("blue.50", "darkBlue.800")}
    >
      <VStack flex={1} space={2} pt={16}>
        <Avatar
          source={require("../../assets/avatar.png")}
          size="xl"
          borderRadius={100}
          borderWidth={3}
          mb={6}
          borderColor="primary.400"
        />
        <Heading mb={4} size="xl">
          Zinedine Hamadi
        </Heading>

        <MenuButton
          active={currentRoute === "Main"}
          onPress={handlePressMenuMain}
          icon="inbox"
        >
          Tasks
        </MenuButton>
        <MenuButton
          active={currentRoute === "About"}
          onPress={handlePressMenuAbout}
          icon="info"
        >
          About
        </MenuButton>
      </VStack>

      <Center>
        <ToggleDarkMode />
      </Center>
    </AnimatedColorBox>
  );
};

export default Sidebar;
