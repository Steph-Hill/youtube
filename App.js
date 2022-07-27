import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Header from './components/Header'
import Tendance from './components/Tendance'
import Content from './components/Content'
import VideosContent from './components/VideosContent'



const App = () => {
  return (
    <View>
      <Header/>
      <Tendance/>
      <Content/>
      <VideosContent/>
      
    </View>
  )
}

export default App

const styles = StyleSheet.create({})