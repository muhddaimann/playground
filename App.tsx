import { StatusBar } from "expo-status-bar";
import { Alert } from "react-native";
import { ThemeProvider, useTheme } from "./src/ui/theme/ThemeProvider";
import { Button } from "./src/ui/components/Button";
import { Text } from "./src/ui/primitives/Text";
import { Box } from "./src/ui/primitives/Box";

function AppContent() {
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
      <Text>Open up App.tsx to start working on your app!</Text>
      <Box style={{ height: theme.spacing.md }} />
      <Button
        title="Press Me!"
        onPress={() => Alert.alert("Button pressed!")}
      />
      <StatusBar style="auto" />
    </Box>
  );
}

import { useFonts, DMSans_400Regular } from "@expo-google-fonts/dm-sans";

export default function App() {
  let [fontsLoaded] = useFonts({
    DMSans_400Regular,
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}
