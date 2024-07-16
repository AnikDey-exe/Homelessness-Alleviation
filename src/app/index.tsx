import { View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { BasePage } from "@/components/layout/BasePage";
import { AppText } from "@/components/ui/AppText";
import { Link } from "expo-router";

export default function Home() {
    return (
        <BasePage>
            <AppText type="header"> Welcome Guest </AppText>
        </BasePage>
    )
}