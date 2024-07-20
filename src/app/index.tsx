import React from "react";
import { View, StyleSheet, FlatList, Image, ListRenderItem, ScrollView } from "react-native";
import { BasePage } from "@/components/layout/BasePage";
import { AppText } from "@/components/ui/AppText";
import { AppHeader } from "@/components/layout/AppHeader";
import { ChatBubble } from "@/components/ui/ChatBubble";
import { services, PRIMARY_COLOR, chatStarters } from "@/lib/constants";
import { ServiceConst } from "@/lib/types";
import { Link } from "expo-router";

export default function Home() {
    return (
        <BasePage style={styles.pageContainer}>
            <AppHeader />
            <ScrollView
                style={styles.scrollContainer}
                showsHorizontalScrollIndicator={false}
                showsVerticalScrollIndicator={false}>
                <AppText type="header" style={styles.headerText}>Welcome Guest!</AppText>
                <ChatbotGreeter />
                <HomeBanner message="This application is in its development stage currently. Expect bugs and glitches to occur as well as updates." />
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
            </ScrollView>
        </BasePage>
    )
}

interface HomeBannerProps {
    message: string;
}

const HomeBanner: React.FC<HomeBannerProps> = ({ message }) => {
    return (
        <View style={styles.bannerContainer}>
            <AppText type="subheader" style={styles.bannerText}>{message}</AppText>
        </View>
    )
}

const ServiceCard: ListRenderItem<ServiceConst> = ({ item }) => {
    const { serviceName, href, image } = item;

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

const ChatbotGreeter: React.FC = () => {
    return (
        <View style={styles.greeterContainer}>
            <AppText type="subheader" style={styles.greeterSubheader}>Chat Now</AppText>
            <View style={styles.chatBubblesContainer}>
                {chatStarters.map((item, i) => {
                    return (
                        <View key={i} style={{
                            paddingRight: 7.5
                        }}>
                            <ChatBubble type="receive" style={{
                                marginTop: 7.5,
                                marginLeft: 0
                            }}>{item}</ChatBubble>
                        </View>
                    )
                })}
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    pageContainer: {
        paddingHorizontal: 20
    },
    headerText: {
        marginTop: 20,
        marginLeft: 0
    },
    scrollContainer: {
        paddingBottom: 0
    },
    subheaderText: {
        marginTop: 25,
        marginLeft: 0,
        marginBottom: 5
    },
    bannerContainer: {
        width: "100%",
        borderStyle: "solid",
        borderWidth: 2.5,
        borderRadius: 10,
        borderColor: PRIMARY_COLOR,
        backgroundColor: PRIMARY_COLOR,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 25
    },
    bannerText: {
        color: "white",
        marginVertical: 5,
        fontFamily: "Poppins_400Regular",
        marginHorizontal: 5
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
    },
    greeterContainer: {
        marginBottom: 0,
        marginTop: 20
    },
    greeterSubheader: {
        marginBottom: 5,
        marginTop: 0
    },
    chatBubblesContainer: {
        flexDirection: "row",
        flexWrap: "wrap"
    }
});
