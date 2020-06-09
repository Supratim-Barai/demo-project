import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, Image, TextInput, TouchableOpacity, Alert, Dimensions } from 'react-native';



const { width, height } = Dimensions.get('window')
const Devicewidth = Dimensions.get('window').width;
const Deviceheight = Dimensions.get('window').height;

const Login = (props) => {

    const [Name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [CnfPassword, setCnfPassword] = useState("")

    const { navigation } = props

    useEffect(() => {

    }, [])

    const onSignupPress = () => {
        console.log(email, password);
        props.navigation.navigate("Login")
    }

    return (
        <View style={{ flex: 1, alignContent: "center", justifyContent: "center" }}>
            <Text style={{ textAlign: "center", fontSize: 25, marginBottom: 30 }}>Sign Up</Text>
            <View style={{ marginTop: 20 }}>
                <View style={{ alignItems: 'center', justifyContent: 'center' }}>

                    <TextInput
                        style={{
                            height: Deviceheight / 18,
                            width: Devicewidth / 1.3, padding: 10, borderColor: '#747474', borderWidth: 0.7, borderRadius: 5
                        }}
                        onChangeText={name => setName(name)}
                        placeholder="Name"
                    />
                </View>
                <View style={{ alignItems: 'center', justifyContent: 'center', marginTop: 10 }}>
                    <TextInput
                        style={{
                            height: Deviceheight / 18,
                            width: Devicewidth / 1.3, padding: 10, borderColor: '#747474', borderWidth: 0.7, borderRadius: 5
                        }}
                        onChangeText={email => setEmail(email)}
                        value={props.email}
                        placeholder="Email"
                    />

                </View>
                <View style={{ alignItems: 'center', justifyContent: 'center', marginTop: 10 }}>
                    <TextInput
                        style={{
                            height: Deviceheight / 18,
                            width: Devicewidth / 1.3, padding: 10, borderColor: '#747474', borderWidth: 0.7, borderRadius: 5
                        }}
                        onChangeText={password => setPassword(password)}
                        placeholder="Password"
                        secureTextEntry={true}
                    />

                </View>
                <View style={{ alignItems: 'center', justifyContent: 'center', marginTop: 10 }}>
                    <TextInput
                        style={{
                            height: Deviceheight / 18,
                            width: Devicewidth / 1.3, padding: 10, borderColor: '#747474', borderWidth: 0.7, borderRadius: 5
                        }}
                        onChangeText={cnfpassword => setCnfPassword(cnfpassword)}
                        placeholder="Confirm Password"
                        secureTextEntry={true}
                    />

                </View>
                <View style={{ justifyContent: 'center', alignItems: 'center', margin: 15 }}>
                    <TouchableOpacity
                        style={styles.loginBtn}
                        onPress={onSignupPress}
                    >
                        <Text style={styles.loginText}>Signup</Text>
                    </TouchableOpacity>
                </View>
            </View>

            <View style={{ flexDirection: "row", width: "100%", justifyContent: "center", marginTop: 20 }}>
                <Text style={{ textAlign: "center", fontSize: 20 }}>Have Account </Text>
                <TouchableOpacity onPress={() => props.navigation.navigate("Login")}>
                    <Text style={{ textAlign: "center", fontSize: 20, marginBottom: 30, color: "blue" }}> Login</Text>
                </TouchableOpacity>
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    loginText: {
        color: '#fff'
    },
    loginBtn: {
        width: '75%',
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


export default Login