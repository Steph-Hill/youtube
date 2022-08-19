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
        height:180,
        backgroundColor:'rgba(130, 149, 75,0.8)',
        
        justifyContent:"space-between",
        paddingHorizontal:20,
        
       

    },
    tendanceText:{
      textAlign:'center',
      fontSize:19,
      fontStyle:'normal',
      fontWeight:'800',
      padding:10
      
    }
})