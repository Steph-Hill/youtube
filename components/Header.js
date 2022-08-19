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
                    size={35}               
                    onPress={() => navigation.navigate('Detail')}
                    color={'rgba(187, 238, 145, 1)'}
                    />
                    <View style={styles.titre}>
                            <Text style={styles.titreText1}>My</Text>
                            <Text style={styles.titreText2}>Tube</Text>
                    </View>
                   

                <Icone name='video' 
                        size={30}
                        color={'rgba(187, 238, 145, 1)'}
                        
                        
                />
                

            </View>

    
  )
}

export default Header

const styles = StyleSheet.create({
    header:{
        
    
    height:70,
    backgroundColor:'rgba(25, 54, 1, 0.8)',
    flexDirection:"row",
    justifyContent:"space-between",
    paddingHorizontal:20,
    paddingTop:20
  
    },
    titreText1:{
        textAlign:'center',
        fontSize:30,
        fontStyle:'italic',
        fontWeight:'700',
        color:'rgba(236, 255, 220, 0.8)',
        bottom:6
        
      },
    titreText2:{
        textAlign:'center',
        fontSize:23,
        fontStyle:'normal',
        fontWeight:'700',
        color:'rgba(236, 255, 220, 0.8)'
        
      },

      titre:{
        flexDirection:'row'

      }
})