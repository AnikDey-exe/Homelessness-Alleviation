import { View, Image } from "react-native";
import { BasePage } from "@/components/layout/BasePage";
import { AppText } from "@/components/ui/AppText";
import { AppHeader } from "@/components/layout/AppHeader";
import { Link } from "expo-router";

export default function Home() {
    return (
        <BasePage>
            <AppHeader/>
            <AppText type="header" style={{
                marginTop: 20
            }}>Welcome Guest</AppText>
        </BasePage>
    )
}