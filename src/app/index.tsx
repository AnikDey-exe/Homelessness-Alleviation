import React from "react";
import { View, StyleSheet, FlatList, Image, ListRenderItem } from "react-native";
import { BasePage } from "@/components/layout/BasePage";
import { AppText } from "@/components/ui/AppText";
import { AppHeader } from "@/components/layout/AppHeader";
import { services } from "@/lib/constants";
import { ServiceConst } from "@/lib/types";
import { Link } from "expo-router";
import { PRIMARY_COLOR } from "@/lib/constants";

export default function Home() {
    return (
        <BasePage>
            <AppHeader />
            <AppText type="header" style={styles.headerText}>Welcome Guest</AppText>
            <AppText type="subheader" style={styles.subheaderText}>Services</AppText>
            <FlatList
                data={services}
                numColumns={2}
                renderItem={ServiceCard}
                keyExtractor={(item: ServiceConst) => item.serviceName}
                style={styles.servicesContainer}
                contentContainerStyle={{
                    gap: 0,
                    // aspectRatio: 1,
                    // justifyContent: "space-between"
                }}
                columnWrapperStyle={{
                    gap: 0,
                    justifyContent: "space-between"
                }} />
        </BasePage>
    )
}

const ServiceCard: ListRenderItem<ServiceConst> = ({ item }) => {
    const { serviceName, href, image } = item;
    console.log("i", image)
    return (
        <View style={styles.serviceContainer}>
            <Link href={href}>
                <View style={styles.link}>
                    <Image
                        source={image}
                        style={styles.serviceImageStyle} />
                    <AppText type="body" style={styles.serviceText}>
                        {serviceName}
                    </AppText>
                </View>
            </Link>
        </View>
    )
}

const styles = StyleSheet.create({
    headerText: {
        marginTop: 20,
        marginLeft: -5
    },
    subheaderText: {
        marginTop: 20,
        marginLeft: -5,
        marginBottom: 5
    },
    servicesContainer: {
        marginTop: 0,
        maxWidth: "100%",
        // borderWidth: 1
    },
    serviceContainer: {
        flex: 1,
        flexDirection: "column",
        maxWidth: "47.5%",
        borderStyle: "solid",
        borderWidth: 2.5,
        borderRadius: 10,
        borderColor: PRIMARY_COLOR,
        alignItems: "center",
        justifyContent: "center",
        aspectRatio: 1,
        marginVertical: 7.5
    },
    link: {
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minWidth: "100%",
        height: "99%",
        // borderWidth: 1
    },
    serviceText: {
        marginTop: 10
    },
    serviceImageStyle: {
        width: "90%",
        height: "60%",
        resizeMode: 'contain',
    }
});
