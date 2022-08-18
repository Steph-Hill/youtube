import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

import { SafeAreaProvider } from 'react-native-safe-area-context'

import  Icone from "react-native-vector-icons/Entypo"

import Icone2 from "react-native-vector-icons/Fontisto"

import Detail from './Detail'


const Header = () => {
  return (
    

            <View style={styles.header}>

                
                <Icone 
                    name='menu' 
                    size={30}               
                    onPress={() => navigation.navigate('Detail')}/>
                    
                <Icone2 name='search' size={25}/>
                

            </View>

    
  )
}

export default Header

const styles = StyleSheet.create({
    header:{
        height:70,
        backgroundColor:'rgb(239, 211, 69)',
        flexDirection:"row",
        justifyContent:"space-between",
        padding:20,
  
    },
    
})