import { StyleSheet, Text, View, ImageBackground } from 'react-native'
import React from 'react'

const MaxiVideo = ({item}) => {
  return (
    <ImageBackground style={styles.block}source={item.image}>
      <Text >{item.titre}</Text>
    </ImageBackground>
  )
}

export default MaxiVideo

const styles = StyleSheet.create({
    block:{
        height:220,
        margin:10,
        borderColor:'rgba(0, 174, 58, 1)',
        borderWidth:2,
        
        
    }
})