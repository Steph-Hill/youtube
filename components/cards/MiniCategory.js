import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Button } from "@rneui/themed";

const MiniCategory = ({item}) => {
  return (
    <View>
      <Button
              title={item.titre}
              buttonStyle={{
                borderColor: 'rgba(187, 238, 145, 0.8)',
                borderWidth:2,
                borderRadius:15
              }}
              type="outline"
              titleStyle={{ color:'rgba(187, 238, 145, 1)',
                            fontSize:19 }}
              containerStyle={{
                width: 150,
                height:70,
                padding:10,
               
                
                
              }}
            />
    </View>
  )
}

export default MiniCategory

const styles = StyleSheet.create({

    textCategoy:{
        flex:1,
        backgroundColor:'rgba(243, 245, 39, 0.5)',
        justifyContent:'center',
        flexDirection:'row',
        
        
        
        
    }
})