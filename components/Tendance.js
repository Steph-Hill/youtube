import { StyleSheet, Text, View,FlatList } from 'react-native'
import React from 'react'
import MiniCards from './cards/MiniCards'
import { videos } from '../constante/videos'
import MaxiVideo from './cards/MaxiVideo'

const Tendance = () => {
  return (

    
    <View style={styles.minivideos}>
               
      <Text style={styles.tendanceText}>Tendances</Text>

        <FlatList
            data={videos}
            renderItem={({item})=><MiniCards item={item}/>}
            keyExtractor={item => item.id}
            horizontal 
        />

        
      
    </View>
  )
}

export default Tendance

const styles = StyleSheet.create({

    minivideos:{
        height:170,
        backgroundColor:'rgba(210, 246, 119, 0.2)',
        
        justifyContent:"space-between",
        padding:10,

    },
    tendanceText:{
      textAlign:'center',
      fontSize:19,
      fontStyle:'italic',
      fontWeight:'800'
    }
})