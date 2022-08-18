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

const config = {
  animation: 'spring',
  config: {
    stiffness: 1000,
    damping: 500,
    mass: 3,
    overshootClamping: true,
    restDisplacementThreshold: 0.5,
    restSpeedThreshold: 0.5,
  },
};

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
/*       supprime le header de la navigation
 */      screenOptions={{ headerShown: false }}> 
        <Stack.Screen name="Home" 
                      component={Home} 
                      options={{
                        transitionSpec: {
                          open: config,
                          close: config,
                        },
                      }}
                      />
        <Stack.Screen name="Detail" component={Detail} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App

const styles = StyleSheet.create({})