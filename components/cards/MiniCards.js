import { StyleSheet, Text, View,Te } from 'react-native'
import React from 'react'
import {  Card, Button, Icon } from '@rneui/themed';

const MiniCards = ({item}) => {

    return (
      <View>
        <View style={styles.card}>

            <Text style={styles.textCard}>{item.titre}</Text>
            

        </View>
      </View>
    )




}

export default MiniCards

const styles = StyleSheet.create({
  card:{
    height:120,
    width:300,
    backgroundColor:'rgba(210, 63, 119, 0.42)',
    marginHorizontal:5,
    borderRadius:5
    
  },
  textCard:{

    fontSize:20,
    color:'white',
    textAlign:'center',
    backgroundColor:'rgba(7, 7, 7, 0.29)',
    padding:2,
    top:60
    

  }
    
})