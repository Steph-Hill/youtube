import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const MiniCategory = ({item}) => {
  return (
    <View>
      <Text style={styles.textCategoy}>{item.titre}</Text>
    </View>
  )
}

export default MiniCategory

const styles = StyleSheet.create({

    textCategoy:{
        height:50,
        backgroundColor:'rgba(243, 245, 39, 0.5)',
        paddingHorizontal:50,
        marginTop:5,
        paddingVertical:10
        
    }
})