// createTheme.ts
import { colors } from '../tokens/colors';
import { spacing } from '../tokens/spacing';
import { typography } from '../tokens/typography';
import { radius } from '../tokens/radius';
import { elevation } from '../tokens/elevation';
import { motion } from '../tokens/motion';

export const createTheme = (theme: {
  colors: { [key: string]: string };
  spacing: typeof spacing;
  typography: typeof typography;
  radius: typeof radius;
  elevation: typeof elevation;
  motion: typeof motion;
}) => theme;