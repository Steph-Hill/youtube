import { StyleSheet, Text, View, FlatList } from 'react-native'
import React from 'react'
import MaxiVideo from './cards/MaxiVideo'
import { videos } from '../constante/videos'

const VideosContent = () => {
  return (
    <View style={{backgroundColor:'rgba(1, 122, 78, 0.3)'}}>
        <Text>Vidéos</Text>
        <FlatList
            data={videos}
            renderItem={({item})=><MaxiVideo item={item}/>}
            keyExtractor={item => item.id}
        />
    </View>
  )
}

export default VideosContent

const styles = StyleSheet.create({})