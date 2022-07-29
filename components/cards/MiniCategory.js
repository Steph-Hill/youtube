import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Button } from "@rneui/themed";

const MiniCategory = ({item, navigation}) => {
  return (
    <View>
      <Button
              title={item.titre}
              buttonStyle={{
                borderColor: 'rgba(41, 76, 4, 1)',
                borderWidth:2,
              }}
              type="outline"
              titleStyle={{ color: 'rgba(211, 246, 174, 1)' }}
              containerStyle={{
                width: 200,
                height:80,
                top:1,
                marginHorizontal: 50,
                marginVertical: 20,
                
              }}
            />
    </View>
  )
}

export default MiniCategory

const styles = StyleSheet.create({

    textCategoy:{
        height:20,
        backgroundColor:'rgba(243, 245, 39, 0.5)',
        paddingHorizontal:50,
        marginTop:5,
        paddingVertical:10
        
    }
})