import { Stack } from 'expo-router';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import {
    useFonts,
    Poppins_200ExtraLight,
    Poppins_600SemiBold,
    Poppins_400Regular
} from "@expo-google-fonts/dev";

export default function RootLayout() {
    let [fontsLoaded] = useFonts({
        Poppins_200ExtraLight,
        Poppins_600SemiBold,
        Poppins_400Regular
    });

    if (!fontsLoaded) {
        return null;
    }

    return (
        <SafeAreaProvider>
            <Stack screenOptions={{
                contentStyle: {
                    padding: 0
                }
            }}>
                <Stack.Screen name="index" options={{
                    headerShown: false
                }} />
                <Stack.Screen name="chatbot" options={{
                    headerShown: false
                }} />
            </Stack>
        </SafeAreaProvider>
    )
}