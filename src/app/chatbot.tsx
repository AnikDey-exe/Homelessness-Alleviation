import { useState, useCallback } from "react";
import { View, StyleSheet } from "react-native";
import { BasePage } from "@/components/layout/BasePage";
import { AppText } from "@/components/ui/AppText";
import { GiftedChat, Bubble, Send, IMessage, InputToolbar, Composer, Avatar } from "react-native-gifted-chat";
import { PRIMARY_COLOR, SECONDARY_COLOR } from "@/lib/constants";

export default function Chatbot() {
    const [messages, setMessages] = useState<IMessage[]>([
        {
            _id: 1,
            text: 'Hello developer',
            createdAt: new Date(),
            user: {
                _id: 2,
                name: 'React Native',
                avatar: 'https://cdn-icons-png.freepik.com/512/6858/6858471.png',
            },
        },
        {
            _id: 2,
            text: 'Hello developer',
            createdAt: new Date(),
            user: {
                _id: 2,
                name: 'React Native',
                avatar: 'https://cdn-icons-png.freepik.com/512/6858/6858471.png',
            },
        }
    ])

    const onSend = useCallback((messages: IMessage[] = []) => {
        setMessages(previousMessages =>
            GiftedChat.append(previousMessages, messages),
        )
    }, [])

    return (
        <BasePage>
            <AppText type="header" style={styles.headerText}>Chatbot</AppText>
            <GiftedChat
                messages={messages}
                onSend={(messages: IMessage[]) => onSend(messages)}
                user={{
                    _id: 1
                }}
                renderBubble={props => {
                    return (
                        <Bubble
                            {...props}
                            textStyle={{
                                left: styles.leftBubbleText,
                                right: styles.rightBubbleText
                            }}
                            wrapperStyle={{
                                left: styles.leftBubble,
                                right: styles.rightBubble
                            }} />
                    )
                }}
                renderSend={props => {
                    return (
                        <Send {...props} containerStyle={styles.sendButton}>
                            {/* <View> */}
                                <AppText type="body" style={styles.sendText}> Send </AppText>
                            {/* </View> */}
                        </Send>
                    )
                }}
                renderAvatarOnTop={true}
                renderInputToolbar={props => {
                    return (
                        <InputToolbar {...props}
                            primaryStyle={styles.toolbarContainer}>
                        </InputToolbar>
                    )
                }}
                timeTextStyle={{
                    left: styles.timeText
                }}
                renderComposer={props => {
                    return (
                        <Composer {...props} textInputStyle={styles.inputContainer}/>
                    )
                }}
            />
        </BasePage>
    )
}

const styles = StyleSheet.create({
    headerText: {
        padding: 20
    },
    leftBubble: {
        backgroundColor: "#D9D9D9",
        padding: 5,
        marginBottom: 10
    },
    rightBubble: {
        backgroundColor: PRIMARY_COLOR,
        padding: 5,
        marginBottom: 10
    },
    leftBubbleText: {
        fontFamily: "Poppins_300Light"
    },
    rightBubbleText: {
        color: SECONDARY_COLOR,
        fontFamily: "Poppins_300Light"
    },
    toolbarContainer: {
        borderRadius: 20,
        // borderWidth: 1,
        // minHeight: 50,
        width: "100%",
        alignSelf: "center",
        alignItems: "center",
        paddingHorizontal: 10
    },
    inputContainer: { 
        fontFamily: "Poppins_300Light", 
        borderWidth: 0.75, 
        borderRadius: 10,
        borderColor: "#D9D9D9",
        alignItems: "center",
        padding: 10,
        minHeight: 40,
        marginLeft: 0
    },
    sendButton: {
        marginRight: 0,
        marginLeft: 10,
        backgroundColor: PRIMARY_COLOR,
        padding: 10,
        borderRadius: 25,
        alignItems: "center",
        justifyContent: "center",
        minHeight: 40
    },
    sendText: {
        marginTop: 0,
        color: "white"
    },
    timeText: {
        color: "grey"
    }
})