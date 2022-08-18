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
        <Text style={styles.section3}>Ajouté le : {item.date}</Text>

    </View>

    <View style={styles.textDesc}>

        <Text style={styles.section4} >Description :</Text>
        <Text style={styles.section5}>{item.description}</Text>

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
  height:150,
  bottom:35,
  borderTopStartRadius:30,
  borderTopEndRadius:30,
  
  
  

},

section2:{
  textAlign:'center',
  fontSize:25,
  textShadowRadius:10,
  textShadowColor:'green',
  color:'white',
  paddingTop:20
  

},
section3:{
  paddingHorizontal:20,
  top:30,
  textAlign:'left',
  fontWeight:'400',
  color:'white',
  textShadowRadius:5,
  textShadowColor:'green',
  fontSize:16
  
},

textDesc:{
  backgroundColor:'orange',
  height:350,
  bottom:35,
  borderTopStartRadius:30,
  borderTopEndRadius:30,
  bottom:70,
 
},
section4:{

  textAlign:'left',
  fontSize:23,
  textShadowRadius:10,
  textShadowColor:'green',
  color:'white',
  padding:20
},
section5:{
  paddingHorizontal:20,
  fontWeight:'400',
  color:'white',
  textShadowRadius:5,
  textShadowColor:'green',
  fontSize:19
 

}

})