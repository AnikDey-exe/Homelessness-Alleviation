import React from "react";
import { View, Image, StyleSheet } from "react-native";
import { AppButton } from "../ui/AppButton";

export const AppHeader: React.FC = () => {
    return (
        <View style={styles.container}>
             <Image
                source={require("@//images/applogo.png")}
                style={styles.imageStyle} />
            <AppButton type="primary" onPress={()=> {

            }}>
                Login
            </AppButton>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        justifyContent: "space-between"
    },
    imageStyle: {
        width: 50,
        resizeMode: 'contain',
        height: 50,
        marginLeft: 0
    }
})