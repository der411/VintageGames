import { Stack } from 'expo-router';
import { SafeAreaProvider } from 'react-native-safe-area-context';

export default function RootLayout() {
  return (
    <SafeAreaProvider>
      <Stack>
        <Stack.Screen name="index" options={{ title: 'Home' }} />
        <Stack.Screen name="details" options={{ title: 'Game Details' }} />
        <Stack.Screen name="pogs" options={{ title: 'Pogs' }} />
        <Stack.Screen name="pogs/[pogId]" options={{ title: 'Pog Details' }} />
      </Stack>
    </SafeAreaProvider>
  );
}