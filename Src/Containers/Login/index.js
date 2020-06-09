import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, Image, TextInput, TouchableOpacity, Alert, Dimensions } from 'react-native';
import data from "../../data";


const { width, height } = Dimensions.get('window')
const Devicewidth = Dimensions.get('window').width;
const Deviceheight = Dimensions.get('window').height;

const Login = (props) => {

  const [email, setEmail] = useState("alex@gmail.com")
  const [password, setPassword] = useState("123456")
  const { navigation } = props

  

  const onLoginPress = () => {
    console.log(email, password);
    const user = data.find(obj => obj.email == email.toLocaleLowerCase() && obj.password == password)
    console.log(user);
    if (!user) {
      alert("user not exist")
    } else {
      props.navigation.navigate("Profile", { "user": user })
    }


  }


  return (
    <View style={{ flex: 1, alignContent: "center", justifyContent: "center" }}>
      <Text style={{ textAlign: "center", fontSize: 25, marginBottom: 30 }}>Login</Text>
      <View style={{ marginTop: 20 }}>
        <View style={{ alignItems: 'center', justifyContent: 'center' }}>

          <TextInput
            style={{
              height: Deviceheight / 18,
              width: Devicewidth / 1.3, padding: 10, borderColor: '#747474', borderWidth: 0.7, borderRadius: 5
            }}
            onChangeText={value => setEmail(value)}
            value={email}
            placeholder="Email"
          />

        </View>
        <View style={{ alignItems: 'center', justifyContent: 'center', marginTop: 10 }}>
          <TextInput
            style={{
              height: Deviceheight / 18,
              width: Devicewidth / 1.3, padding: 10, borderColor: '#747474', borderWidth: 0.7, borderRadius: 5
            }}
            onChangeText={value => setPassword(value)}
            placeholder="Password"
            value={password}
            secureTextEntry={true}
          />
        </View>
        <View style={{ justifyContent: 'center', alignItems: 'center', margin: 15 }}>
          <TouchableOpacity
            style={styles.loginBtn}
            onPress={onLoginPress}
          >
            <Text style={styles.loginText}>Login</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={{ flexDirection: "row", width: "100%", justifyContent: "center", marginTop: 20 }}>
        <Text style={{ textAlign: "center", fontSize: 20 }}>Don't Have Account </Text>
        <TouchableOpacity onPress={() => props.navigation.navigate("Signup")}>
          <Text style={{ textAlign: "center", fontSize: 20, marginBottom: 30, color: "blue" }}> Sign Up</Text>
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