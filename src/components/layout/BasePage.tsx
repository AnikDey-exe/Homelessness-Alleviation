import React, { ReactNode } from "react";
import { SafeAreaView } from "react-native-safe-area-context";

interface BasePageProps {
    children: ReactNode;
    style?: object;
}

export const BasePage: React.FC<BasePageProps> = ({ children, style = {} }) => {
    return (
        <SafeAreaView style={{
            flex: 1,
            ...style
        }}>
            {children}
        </SafeAreaView>
    )
}