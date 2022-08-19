import { StyleSheet, Text, View,ImageBackground } from 'react-native'
import React from 'react'
import {  Card, Button, Icon } from '@rneui/themed';

const MiniCards = ({item}) => {

    return (
      <View >
        <ImageBackground source={item.image} style={styles.card}
         imageStyle={{ borderRadius: 15}}>

            <Text style={styles.textCard}>{item.titre}</Text>
            

        </ImageBackground>
      </View>
    )




}

export default MiniCards

const styles = StyleSheet.create({
  card:{
    height:110,
    width:250,
    backgroundColor:'rgb(125, 206, 19)',
    marginRight:20,
    borderRadius:50
    
  },
  textCard:{

    fontSize:20,
    color:'rgba(187, 238, 145, 1)',
    textAlign:'center',
    backgroundColor:'rgba(7, 7, 7, 0.29)',
    padding:2,
    top:60
    

  }
    
})