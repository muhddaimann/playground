// Card.tsx
import React from "react";
import { Box, BoxProps } from "../primitives/Box";
import { useTheme } from "../theme/themeProvider";

export const Card = (props: BoxProps) => {
  const theme = useTheme();

  return (
    <Box
      style={{
        backgroundColor: theme.colors.background,
        borderRadius: theme.radius.lg,
        padding: theme.spacing.md,
        ...theme.elevation.md,
      }}
      {...props}
    />
  );
};
