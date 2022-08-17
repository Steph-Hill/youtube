import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Header from './Header'
import Tendance from './Tendance'
import Content from './Content'
import VideosContent from './VideosContent'
const Home = ({navigation}) => {
  return (
    <View>
      <Header navigation={navigation}/>
      <Tendance />
      <Content/>
      <VideosContent navigation={navigation}/>
      
    </View>
  )
}

export default Home

const styles = StyleSheet.create({})