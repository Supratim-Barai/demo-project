import React from 'react'
import { GiftedChat } from 'react-native-gifted-chat'
import { View, TouchableOpacity, StyleSheet, Text } from 'react-native'

class Chat extends React.Component {
    state = {
        messages: [],
    }

    componentDidMount() {
        this.setState({
            messages: [
                {
                    _id: 1,
                    text: 'Hello',
                    createdAt: new Date(),
                    user: {
                        _id: 2,
                        name: "John",
                    },
                },
            ],
        })
    }

    onSend(messages = []) {
        this.setState(previousState => ({
            messages: GiftedChat.append(previousState.messages, messages),
        }))
    }

    render() {
        return (
            <View style={{flex:1}}>
               
                    <TouchableOpacity
                        style={{ ...styles.Btn, marginTop: 10, marginLeft: 20, backgroundColor: "blue", alignSelf: "flex-start" }}
                        onPress={()=>this.props.navigation.goBack()}
                    >
                        <Text style={styles.loginText}>Back</Text>
                    </TouchableOpacity>
           
            <GiftedChat
                messages={this.state.messages}
                onSend={messages => this.onSend(messages)}
                user={{
                    _id: 1,
                }}
            />
            </View >
        )
    }
}

const styles = StyleSheet.create({
    Btnview: {
        flexDirection: "row",
        width: "100%",
        paddingBottom: 40,
        justifyContent: "space-between"
    },
    loginText: {
        color: '#fff'
    },
    Btn: {
        width: 100,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fe0000',
        padding: 10,
        elevation: 7,
        borderRadius: 5,
        height: 40,
        marginTop: 20
    },

})

export default Chat;