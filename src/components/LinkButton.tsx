import React, { useCallback } from "react";

import { Button, IButtonProps } from "native-base";
import { Linking } from "react-native";

interface Props extends IButtonProps {
  href: string;
}

const LinkButton: React.FC = ({ href, ...props }: Props) => {
  const handlePress = useCallback(() => {
    Linking.openURL(href);
  }, [href]);

  return <Button {...props} onPress={handlePress} />;
};

export default LinkButton;
