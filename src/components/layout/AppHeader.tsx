import React from "react";
import { View, Image, StyleSheet } from "react-native";
import { AppButton } from "../ui/AppButton";

export const AppHeader: React.FC = () => {
    return (
        <View style={styles.container}>
             <Image
                source={require("@//images/applogo.png")}
                style={{
                    width: 50,
                    resizeMode: 'contain',
                    height: 50,
                    marginLeft: 5
                }} />
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
    }
})