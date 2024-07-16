import { View, Image } from "react-native";
import { BasePage } from "@/components/layout/BasePage";
import { AppText } from "@/components/ui/AppText";
import { Link } from "expo-router";

export default function Home() {
    return (
        <BasePage>
            <Image
            source={require("@//images/logo.png")}
            style={{
                width: 50,
                height: 50
            }}/>
            <AppText type="header"> Welcome Guest </AppText>
        </BasePage>
    )
}