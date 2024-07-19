import React from "react";
import { View, StyleSheet } from "react-native";
import { AppText } from "./AppText";
import { PRIMARY_COLOR, SECONDARY_COLOR } from "@/lib/constants";

interface ChatBubbleProps {
    children: string;
    type: "send" | "receive" | "custom";
    style?: object;
    textStyle?: object;
}

export const ChatBubble: React.FC<ChatBubbleProps> = ({ children, type, style = {}, textStyle = {} }) => {
    return (
        <View style={[
            {
                // maxWidth: "60%",
                borderRadius: 20,
                padding: 15,
                alignSelf: "flex-start"
            },
            styles[type], 
            style
        ]}>
            <AppText type="body" style={[
                {
                    marginTop: 0
                },
                styles[type === "send" ? "sendText" : type === "receive" ? "receiveText" : "customText"],
                textStyle
            ]}>{children}</AppText>
        </View>
    )
}

const styles = StyleSheet.create({
    send: {
        backgroundColor: PRIMARY_COLOR
    },
    sendText: {
        color: SECONDARY_COLOR
    },
    receive: {
        backgroundColor: "#D9D9D9"
    },
    receiveText: {
        color: "black"
    },
    custom: {},
    customText: {}
});