// Button.tsx
import React from "react";
import { TouchableOpacity } from "react-native";
import { useTheme } from "../theme/themeProvider";
import { Text } from "../primitives/Text";
import { Box } from "../primitives/Box";

export type ButtonProps = {
  title: string;
  onPress: () => void;
  variant?: "primary" | "secondary" | "ghost";
};

export const Button = ({
  title,
  onPress,
  variant = "primary",
}: ButtonProps) => {
  const theme = useTheme();

  const containerStyles = {
    primary: {
      backgroundColor: theme.colors.primary,
      paddingVertical: theme.spacing.sm,
      paddingHorizontal: theme.spacing.md,
      borderRadius: theme.radius.md,
      alignItems: "center" as const,
    },
    secondary: {
      backgroundColor: theme.colors.white,
      paddingVertical: theme.spacing.sm,
      paddingHorizontal: theme.spacing.md,
      borderRadius: theme.radius.md,
      alignItems: "center" as const,
      borderWidth: 1,
      borderColor: theme.colors.primary,
    },
    ghost: {
      backgroundColor: "transparent",
      paddingVertical: theme.spacing.sm,
      paddingHorizontal: theme.spacing.md,
      borderRadius: theme.radius.md,
      alignItems: "center" as const,
    },
  };

  const textStyles = {
    primary: { color: theme.colors.white },
    secondary: { color: theme.colors.primary },
    ghost: { color: theme.colors.primary },
  };

  return (
    <TouchableOpacity onPress={onPress}>
      <Box style={containerStyles[variant]}>
        <Text style={textStyles[variant]}>{title}</Text>
      </Box>
    </TouchableOpacity>
  );
};
