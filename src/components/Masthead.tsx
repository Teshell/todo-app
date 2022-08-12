import React from "react";
import { ImageSourcePropType } from "react-native";
import { Image, VStack, Heading, Box } from "native-base";

interface Props {
  title: string;
  image: ImageSourcePropType;
  children: React.ReactNode;
}

const Masthead = (props: Props) => {
  const { title, image, children } = props;

  return (
    <VStack h="300px" pb={4}>
      <Image
        source={image}
        w="full"
        h="300px"
        position="absolute"
        top="0"
        left="0"
        right="0"
        resizeMode="cover"
        alt="masthead image"
      />

      {children}
      <Box flex={1} />
      <Heading color="white" p={7} size="xl">
        {title}
      </Heading>
    </VStack>
  );
};

export default Masthead;
