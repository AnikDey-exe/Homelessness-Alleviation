import { Stack } from 'expo-router';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import {
    useFonts,
    Poppins_200ExtraLight,
    Poppins_600SemiBold,
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_300Light
} from "@expo-google-fonts/dev";
import { SECONDARY_COLOR } from '@/lib/constants';

export default function RootLayout() {
    let [fontsLoaded] = useFonts({
        Poppins_200ExtraLight,
        Poppins_600SemiBold,
        Poppins_400Regular,
        Poppins_500Medium,
        Poppins_300Light
    });

    if (!fontsLoaded) {
        return null;
    }

    return (
        <SafeAreaProvider>
            <Stack screenOptions={{
                contentStyle: {
                    padding: 0,
                    backgroundColor: SECONDARY_COLOR
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