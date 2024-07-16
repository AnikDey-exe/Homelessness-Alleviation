import { Text, StyleSheet } from "react-native";

export default function AppText({children, type} : {children: string, type: string}) {
    return (
        <Text> {children} </Text>
    )
}

const styles = StyleSheet.create({
    
})