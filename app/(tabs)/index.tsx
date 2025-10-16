import { Alert } from "react-native";
import { useTheme } from "../../src/ui/theme/themeProvider";
import { Button } from "../../src/ui/components/Button";
import { Text } from "../../src/ui/primitives/Text";
import { Box } from "../../src/ui/primitives/Box";

export default function HomeScreen() {
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
      <Text>This is the Home Screen!</Text>
      <Box style={{ height: theme.spacing.md }} />
      <Button
        title="Primary Button"
        onPress={() => Alert.alert("Primary button pressed!")}
      />
      <Box style={{ height: theme.spacing.md }} />
      <Button
        title="Secondary Button"
        variant="secondary"
        onPress={() => Alert.alert("Secondary button pressed!")}
      />
      <Box style={{ height: theme.spacing.md }} />
      <Button
        title="Ghost Button"
        variant="ghost"
        onPress={() => Alert.alert("Ghost button pressed!")}
      />
    </Box>
  );
}
