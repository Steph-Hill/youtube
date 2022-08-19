import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Button } from "@rneui/themed";

const MiniCategory = ({item}) => {
  return (
    <View>
      <Button
              title={item.titre}
              buttonStyle={{
                
                borderWidth:0
               
               
              }}
              type="outline"
              titleStyle={{ color:'white',
                            fontSize:19 }}
              containerStyle={{
                width: 150,
                height:80,
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