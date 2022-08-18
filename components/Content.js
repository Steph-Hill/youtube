import { StyleSheet, Text, View,FlatList } from 'react-native'
import React from 'react'
import MiniCards from './cards/MiniCards'
import MiniCategory from './cards/MiniCategory'
import { categories } from '../constante/categories'


const Content = () => {
  return (
    <View style={styles.content}>
        <FlatList
            data={categories}
            renderItem={({item})=><MiniCategory item={item}/>}
            keyExtractor={item => item.id}
            horizontal 
        />
         
        
    </View>
  )
}

export default Content

const styles = StyleSheet.create({
    content:{
        
        backgroundColor:'rgba(130, 149, 75,0.8)',
        
    },
   
})