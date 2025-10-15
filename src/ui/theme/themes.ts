// themes.ts
import { createTheme } from './createTheme';
import { colors } from '../tokens/colors';
import { spacing } from '../tokens/spacing';
import { typography } from '../tokens/typography';
import { radius } from '../tokens/radius';
import { elevation } from '../tokens/elevation';
import { motion } from '../tokens/motion';

const theme = {
  spacing,
  typography,
  radius,
  elevation,
  motion,
};

export const lightTheme = createTheme({
  ...theme,
  colors: {
    ...colors,
    background: colors.white,
    text: colors.black,
  },
});

export const darkTheme = createTheme({
  ...theme,
  colors: {
    ...colors,
    background: colors.black,
    text: colors.white,
  },
});