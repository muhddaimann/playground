// app/_layout.tsx
import { Stack } from "expo-router";
import { ThemeProvider } from "../src/ui/theme/themeProvider";
import { useFonts, DMSans_400Regular } from "@expo-google-fonts/dm-sans";

export default function RootLayout() {
  const [fontsLoaded] = useFonts({ DMSans_400Regular });
  if (!fontsLoaded) return null;

  return (
    <ThemeProvider>
      <Stack initialRouteName="(tabs)">
        <Stack.Screen name="index" options={{ headerShown: false }} />
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      </Stack>
    </ThemeProvider>
  );
}
