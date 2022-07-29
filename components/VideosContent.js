import { StyleSheet, Text, View, FlatList } from 'react-native'
import React from 'react'
import MaxiVideo from './cards/MaxiVideo'
import { videos } from '../constante/videos'
import Swipe from './Swipe'

const VideosContent = ({navigation}) => {
  return (
    <View style={{backgroundColor:'rgb(130, 149, 75)'}}>
        <Text>Vidéos</Text>
        <FlatList
            data={videos}
            renderItem={({item})=><MaxiVideo navigation={navigation} item={item}/>}
            keyExtractor={item => item.id}
            

        />
    </View>
  )
}

export default VideosContent

const styles = StyleSheet.create({})