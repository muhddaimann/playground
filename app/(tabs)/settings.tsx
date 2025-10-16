import { useTheme } from "../../src/ui/theme/themeProvider";
import { Text } from "../../src/ui/primitives/Text";
import { Box } from "../../src/ui/primitives/Box";

export default function SettingsScreen() {
  const theme = useTheme();
  return (
    <Box
      style={{
        flex: 1,
        backgroundColor: theme.colors.background,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Text>Settings Screen</Text>
    </Box>
  );
}
