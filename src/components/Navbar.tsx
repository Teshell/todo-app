import React, { useCallback } from "react";
import { useNavigation } from "@react-navigation/native";

import { HStack, IconButton } from "native-base";
import { Feather } from "@expo/vector-icons";
import { DrawerNavigationProp } from "@react-navigation/drawer";

const Navbar = () => {
  const navigation = useNavigation<DrawerNavigationProp<{}>>();

  const handlePressButton = useCallback(() => {
    navigation.openDrawer();
  }, [navigation]);

  return (
    <HStack w="full" h={40} alignContent="center" alignItems="center" p={4}>
      <IconButton
        borderRadius={100}
        onPress={handlePressButton}
        _icon={{
          as: Feather,
          name: "menu",
          size: 6,
          color: "white",
        }}
      />
    </HStack>
  );
};

export default Navbar;
