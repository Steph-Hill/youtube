import { StyleSheet, Text, View, ImageBackground } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';

import Iconheade from 'react-native-vector-icons/Entypo'
import VideoDetail from './details/VideoDetail';

const Detail = ({route}) => {

  const navigation = useNavigation();

  const { item } = route.params;

  console.log(item)
  
 
  return (

<View>
    <View style={styles.header}>
      
      <Iconheade 
        name='chevron-left'
        size={35}
        onPress={() => navigation.navigate('Home')}
      />

          

      <Iconheade
        name='chevron-right'
        size={35}
      />

    </View>
        
    <ImageBackground source={item.image}
                    style={styles.imagebg}
                    >


    </ImageBackground>

    <View style={styles.textTitre}>

        <Text style={styles.section2}>{item.titre}</Text>
        <Text style={styles.section2}>{item.date}</Text>
        <Text style={styles.section2}>{item.category}</Text>

    </View>
    
</View>
    
    
  )
}

export default Detail

const styles = StyleSheet.create({

  header:{
    height:70,
    backgroundColor:'rgb(239, 211, 69)',
    flexDirection:"row",
    justifyContent:"space-between",
    padding:20,

},

imagebg:{
  
  


  height:300

},

textTitre:{
  
  backgroundColor:'green',
  height:120,
  bottom:35,
  borderTopStartRadius:30,
  borderTopEndRadius:30,
  
  
  

},

section2:{
  padding:20,
  fontSize:25,
  

}

})