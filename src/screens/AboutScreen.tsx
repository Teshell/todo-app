import { Feather } from "@expo/vector-icons";
import {
  Box,
  Icon,
  Image,
  ScrollView,
  Text,
  useColorModeValue,
  VStack,
} from "native-base";
import React from "react";
import AnimatedColorBox from "../components/AnimatedColorBox";
import LinkButton from "../components/LinkButton";
import Masthead from "../components/Masthead";
import Navbar from "../components/Navbar";

const AboutScreen = () => {
  return (
    <AnimatedColorBox
      flex={1}
      bg={useColorModeValue("warmGray.50", "primary.900")}
    >
      <Masthead
        title="About this app"
        image={require("../../assets/aboutMasthead.jpg")}
      >
        <Navbar />
      </Masthead>

      <ScrollView
        flex={1}
        borderTopLeftRadius="20px"
        borderTopRightRadius="20px"
        bg={useColorModeValue("warmGray.50", "primary.900")}
        mt="-20px"
        pt="20px"
        p={4}
      >
        <VStack flex={1} space={4}>
          <Box alignItems="center" pt={3} pb={8}>
            <Image
              w={120}
              h={120}
              resizeMode="cover"
              borderRadius="full"
              borderWidth={3}
              borderColor="emerald.600"
              source={require("../../assets/profile.jpg")}
              alt="Author"
            />
          </Box>

          <Text fontSize="md" w="full">
            This is a Todo App built with React Native, feel free to check out
            the source code on my Github page.
          </Text>

          <LinkButton
            colorScheme={useColorModeValue("blue", "darkBlue")}
            size="lg"
            borderRadius="full"
            href="https://github.com/Teshell"
            leftIcon={
              <Icon as={<Feather name="github" size="sm" opacity="0.5" />} />
            }
          >
            See my Github
          </LinkButton>
        </VStack>
      </ScrollView>
    </AnimatedColorBox>
  );
};

export default AboutScreen;
