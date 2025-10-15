// Button.tsx
import React from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';
import { useTheme } from '../theme/ThemeProvider';
import { Text } from '../primitives/Text';
import { Box } from '../primitives/Box';

export type ButtonProps = {
  title: string;
  onPress: () => void;
};

export const Button = ({ title, onPress }: ButtonProps) => {
  const theme = useTheme();

  return (
    <TouchableOpacity onPress={onPress}>
      <Box
        style={{
          backgroundColor: theme.colors.primary,
          paddingVertical: theme.spacing.sm,
          paddingHorizontal: theme.spacing.md,
          borderRadius: theme.radius.md,
          alignItems: 'center',
        }}
      >
        <Text style={{ color: theme.colors.white }}>{title}</Text>
      </Box>
    </TouchableOpacity>
  );
};
