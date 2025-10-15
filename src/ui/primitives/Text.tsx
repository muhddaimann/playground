// Text.tsx
import { Text as RNText, TextProps as RNTextProps, StyleSheet } from 'react-native';
import { useTheme } from '../theme/ThemeProvider';

export type TextProps = RNTextProps;

export const Text = (props: TextProps) => {
  const theme = useTheme();
  return (
    <RNText
      style={[
        {
          color: theme.colors.text,
          fontFamily: theme.typography.fontFamily.body,
          fontSize: theme.typography.fontSize.body,
        },
        props.style,
      ]}
      {...props}
    />
  );
};