import React from "react";
import { View, StyleSheet, FlatList, ListRenderItem } from "react-native";
import { BasePage } from "@/components/layout/BasePage";
import { AppText } from "@/components/ui/AppText";
import { AppHeader } from "@/components/layout/AppHeader";
import { services } from "@/lib/constants";
import { ServiceConst } from "@/lib/types";
import { Link } from "expo-router";

export default function Home() {
    return (
        <BasePage>
            <AppHeader />
            <AppText type="header" style={{
                marginTop: 20
            }}>Welcome Guest</AppText>
            <AppText type="subheader" style={{
                marginTop: 20
            }}>Services</AppText>
            <FlatList
                data={services}
                numColumns={2}
                renderItem={ServiceCard}
                keyExtractor={(item: ServiceConst) => item.serviceName}/>
        </BasePage>
    )
}

interface ServiceCardProps {
    service: ServiceConst;
}

const ServiceCard: ListRenderItem<ServiceConst> = ({ item }) => {
    const { serviceName, href, image } = item;
    return (
        <View style={styles.serviceContainer}>
            <AppText type="body">
                {serviceName}
            </AppText>
        </View>
    )
}

const styles = StyleSheet.create({
    servicesContainer: {
        flex: 2,
        marginHorizontal: "auto",
    },
    serviceContainer: {
        maxWidth: "50%",
        flexDirection: "column"
    }
});
