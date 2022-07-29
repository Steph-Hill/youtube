import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Header from './components/Header'
import Tendance from './components/Tendance'
import Content from './components/Content'
import VideosContent from './components/VideosContent'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from './components/Home'
import Detail from './components/Detail'

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Detail" component={Detail} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App

const styles = StyleSheet.create({})