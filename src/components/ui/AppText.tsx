import React from "react";
import { Text, StyleSheet } from "react-native";

interface AppTextProps {
    children: string;
    type: "header" | "subheader" | "body" | "custom";
    style?: object;
}

export const AppText: React.FC<AppTextProps> = ({ children, type, style = {} }) => {
    return (
        <Text style={[
            {marginTop: 10},
            styles[type],
            style
        ]}> {children} </Text>
    )
}

const styles = StyleSheet.create({
    header: {
        fontFamily: 'Poppins_600SemiBold',
        fontSize: 30
    },
    subheader: {
        fontFamily: 'Poppins_500Medium',
        fontSize: 20
    },
    body: {
        fontFamily: 'Poppins_200ExtraLight',
        fontSize: 15
    },
    custom: {}
});