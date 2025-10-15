// Icon.tsx
import React from 'react';
import { Text } from 'react-native';

// This is a placeholder for an Icon component.
// You would typically use a library like @expo/vector-icons or react-native-vector-icons here.

export type IconProps = {
  name: string;
  size?: number;
  color?: string;
};

export const Icon = ({ name, size = 24, color = 'black' }: IconProps) => {
  // Replace this with your actual Icon implementation
  return <Text style={{ fontSize: size, color }}>?</Text>;
};
