import { StyleSheet, Text, View,FlatList } from 'react-native'
import React from 'react'
import MiniCards from './cards/MiniCards'
import MiniCategory from './cards/MiniCategory'
import { categories } from '../constante/categories'


const Content = () => {
  return (
    <View style={styles.content}>
        <Text style={{textAlign:'center'}}>Catégory</Text>
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
        height:75,
        backgroundColor:'rgba(243, 245, 39, 0.2)',
        
    },
   
})