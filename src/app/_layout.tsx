import { Stack } from 'expo-router';
import { useFonts, Poppins_200ExtraLight } from "@expo-google-fonts/dev";

export default function RootLayout() {
    let [fontsLoaded] = useFonts({
        Poppins_200ExtraLight
    });

    if (!fontsLoaded) {
        return null;
    }
    
    return (
        <Stack>
            <Stack.Screen name="index" options={{
                headerShown: false
            }} />
            <Stack.Screen name="chatbot" options={{
                headerShown: false
            }} />
        </Stack>
    )
}