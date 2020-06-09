import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, Image, TextInput, TouchableOpacity, Alert, Dimensions } from 'react-native';
import data from "../../data";


const { width, height } = Dimensions.get('window')
const Devicewidth = Dimensions.get('window').width;
const Deviceheight = Dimensions.get('window').height;

const Profile = (props) => {

    const { navigation, route: { params } } = props
    console.log(params);

    const onLoginPress = () => {
        console.log(email, password);
        const user = data.find(obj => obj.email == email.toLocaleLowerCase() && obj.password == password)
        console.log(user);
        props.navigate("Profile", { "user": user })

    }


    return (
        <View style={{ flex: 1, alignContent: "center", marginTop: 40 }}>
            <View style={styles.Btnview}>
                <View style={{ justifyContent: 'center', alignItems: 'center', margin: 15 }}>
                    <TouchableOpacity
                        style={{ ...styles.Btn, backgroundColor: 'blue', }}
                        onPress={() => props.navigation.navigate("Profile",{"user": params.user} )}
                    >
                        <Text style={styles.loginText}>Profile</Text>
                    </TouchableOpacity>
                </View>
                <View style={{ justifyContent: 'center', alignItems: 'center', margin: 15 }}>
                    <TouchableOpacity
                        style={styles.Btn}
                        onPress={() => props.navigation.navigate("Post",{"user": params.user })}
                    >
                        <Text style={styles.loginText}>Post</Text>
                    </TouchableOpacity>
                </View>
                <View style={{ justifyContent: 'center', alignItems: 'center', margin: 15 }}>
                    <TouchableOpacity
                        style={styles.Btn}
                        onPress={() => props.navigation.navigate("Login")}
                    >
                        <Text style={styles.loginText}>Logout</Text>
                    </TouchableOpacity>
                </View>
            </View>

            <Text style={{ textAlign: "center", fontSize: 25, }}>Profile</Text>
            <View style={{ marginTop: 20, padding: 60 }}>
                <View style={{ alignItems: 'center', flexDirection: "row" }}>
                    <Text style={{ fontSize: 18 }}>NAME : </Text>
                    <Text
                        style={{ fontSize: 18 }}
                    >{params.user.name}</Text>

                </View>
                <View style={{ alignItems: 'center', marginTop: 10, flexDirection: "row" }}>
                    <Text style={{ fontSize: 18 }}>EMAIL : </Text>
                    <Text
                        style={{ fontSize: 18 }}
                    >{params.user.email}</Text>
                </View>

            </View>



        </View>
    )
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
        // marginLeft: 20,
        elevation: 7,
        borderRadius: 5,
        height: 40,
        marginTop: 20
    },

})


export default Profile