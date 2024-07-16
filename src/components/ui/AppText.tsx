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
            type === "header" ? 
                styles.header : 
                type === "subheader" ? 
                    styles.subheader : 
                    styles.body, 
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
    fontFamily: 'Poppins_400Regular'
 },
 body: {
    fontFamily: 'Poppins_200ExtraLight'
 }
})