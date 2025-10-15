import React from 'react';
import { TextInput, TextInputProps, StyleSheet } from 'react-native';
import { useTheme } from '../theme/ThemeProvider';

export const Input = (props: TextInputProps) => {
  const theme = useTheme();

  return (
    <TextInput
      style={{
        borderColor: theme.colors.primary,
        borderWidth: 1,
        borderRadius: theme.radius.md,
        padding: theme.spacing.sm,
        color: theme.colors.text,
      }}
      placeholderTextColor={theme.colors.text}
      {...props}
    />
  );
};
