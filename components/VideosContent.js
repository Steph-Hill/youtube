import { StyleSheet, Text, View, FlatList } from 'react-native'
import React from 'react'
import MaxiVideo from './cards/MaxiVideo'
import { videos } from '../constante/videos'
import Swipe from './Swipe'

const VideosContent = () => {
  return (
    <View style={{backgroundColor:'rgba(130, 149, 75,0.4)'}}>
        <Text>Mes Vidéos</Text>
        <FlatList
            data={videos}
            renderItem={({item})=><MaxiVideo  item={item}/>}
            keyExtractor={item => item.id}
            

        />
    </View>
  )
}

export default VideosContent

const styles = StyleSheet.create({})