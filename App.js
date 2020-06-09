
import React, { useState, useEffect } from 'react';
import AppNavigator from './Src/Navigation/AppNavigator';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';


const App = () => {
  

  return (
 
      <NavigationContainer>
        <AppNavigator/>
      </NavigationContainer>
  
  )
}

export default App;