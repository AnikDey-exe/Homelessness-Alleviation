import React from "react";
import { Text, StyleSheet } from "react-native";

interface AppTextProps {
    children: string;
    type: "header" | "subheader" | "body";
    style?: object;
}

export const AppText: React.FC<AppTextProps> = ({ children, type, style = {} }) => {
    return (
        <Text style={[
            styles[type],
            style
        ]}> {children} </Text>
    )
}

const styles = StyleSheet.create({
    header: {
        fontFamily: 'Poppins_600SemiBold',
        fontSize: 30,
        marginTop: 10
    },
    subheader: {
        fontFamily: 'Poppins_500Medium',
        fontSize: 20,
        marginTop: 10
    },
    body: {
        fontFamily: 'Poppins_200ExtraLight',
        fontSize: 15,
        marginTop: 10
    }
});