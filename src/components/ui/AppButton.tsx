import React from "react";
import { TouchableOpacity, Text, StyleSheet, GestureResponderEvent } from "react-native";
import { PRIMARY_COLOR, SECONDARY_COLOR } from "@/lib/constants";

interface AppButtonProps {
    children: string;
    type: "primary" | "secondary" | "custom";
    onPress: (event: GestureResponderEvent) => void;
    style?: {
        buttonStyle?: object;
        textStyle?: object;
    };
}

export const AppButton: React.FC<AppButtonProps> = ({ children, type, onPress, style = { buttonStyle: {}, textStyle: {}} }) => {
    return (
        <TouchableOpacity style={[
            styles[type],
            style.buttonStyle
        ]} onPress={onPress}>
            <Text style={[
                {
                    fontFamily: "Poppins_500Medium"
                },
                styles[type === "primary" ? "primaryText" : type === "secondary" ? "secondaryText" : "customText"],
                style.textStyle
            ]}> {children} </Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    primary: {
        backgroundColor: PRIMARY_COLOR,
        borderRadius: 25,
        marginTop: 10,
        padding: 10
    },
    primaryText: {
        color: SECONDARY_COLOR
    },
    secondary: {
        backgroundColor: SECONDARY_COLOR,
        borderRadius: 25,
        marginTop: 10,
        padding: 10
    },
    secondaryText: {
        color: PRIMARY_COLOR
    },
    custom: {},
    customText: {}
});