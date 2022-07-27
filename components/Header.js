import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

import { SafeAreaProvider } from 'react-native-safe-area-context'

import  Icone from "react-native-vector-icons/Entypo"

import Icone2 from "react-native-vector-icons/Fontisto"
const Header = () => {
  return (
    

            <View style={styles.header}>

                
                <Icone name='menu' size={50}/>
                <Icone2 name='search' size={40}/>

            </View>

    
  )
}

export default Header

const styles = StyleSheet.create({
    header:{
        height:90,
        backgroundColor:'rgba(101, 124, 41, 0.5)',
        flexDirection:"row",
        justifyContent:"space-between",
        padding:20,
  
    },
    
})