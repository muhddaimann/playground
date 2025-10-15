// Chip.tsx
import React from 'react';
import { Box } from '../primitives/Box';
import { Text } from '../primitives/Text';
import { useTheme } from '../theme/ThemeProvider';

export type ChipProps = {
  label: string;
};

export const Chip = ({ label }: ChipProps) => {
  const theme = useTheme();

  return (
    <Box
      style={{
        backgroundColor: theme.colors.primary,
        borderRadius: theme.radius.lg,
        paddingVertical: theme.spacing.xs,
        paddingHorizontal: theme.spacing.sm,
      }}
    >
      <Text style={{ color: theme.colors.white, fontSize: 12 }}>{label}</Text>
    </Box>
  );
};
