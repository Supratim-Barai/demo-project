
import React, { Component } from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Login from '../Containers/Login';
import Signup from '../Containers/Signup/index';
import Profile from '../Containers/Profile/index';
import Post from '../Containers/Post/index';
import Chat from "../Containers/Chat/index";



const Stack = createStackNavigator();


class AppNavigator extends Component {



  render() {
    return (

      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Signup" component={Signup} />
        <Stack.Screen name="Profile" component={Profile} />
        <Stack.Screen name="Post" component={Post} />
        <Stack.Screen name="Chat" component={Chat} />

      </Stack.Navigator>


    );
  }
}



export default AppNavigator;
