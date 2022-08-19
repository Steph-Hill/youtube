import { StyleSheet, Text, View, ImageBackground } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';

import Iconheade from 'react-native-vector-icons/Entypo'
import VideoDetail from './details/VideoDetail';
import IconYoutube from 'react-native-vector-icons/Feather'

const Detail = ({route}) => {

  const navigation = useNavigation();

  const { item } = route.params;

  
  
 
  return (

<View>
    <View style={styles.header}>
      
      <Iconheade 
        name='chevron-left'
        size={55}
        onPress={() => navigation.navigate('Home')}
        color={'rgba(187, 238, 145, 1)'}
      />

          

      <Iconheade
        name='chevron-right'
        size={55}
        color={'rgba(187, 238, 145, 1)'}
      />

    </View>
        
    <ImageBackground source={item.image}
                    style={styles.imagebg}>




    </ImageBackground>
    

    <View style={styles.textTitre}>

        <Text style={styles.section2}>{item.titre}</Text>
        

    

    <View style={styles.textDesc}>

        <Text style={styles.section4} >Description :</Text>
        <Text style={styles.section5}>{item.description}</Text>
        </View>

    <View style={styles.iconList}>

      
        <View  style={styles.cadreIcon}>
            <IconYoutube
                  name='thumbs-down'
                  size={40}
                  />
            <Text>J'aime pas!</Text>
        </View>
          
        <View style={styles.cadreIcon}>
          <IconYoutube
                name='thumbs-up'
                size={40}/>
          <Text >J'aime !</Text>
        </View>
          
        <View style={styles.cadreIcon}>
          <IconYoutube
                name='share'
                size={40}/>
          <Text>Partager</Text>

        </View>
          
        <View style={styles.cadreIcon}>
          <IconYoutube
                name='layers'
                size={40}/>
          <Text>Playlist</Text>
        </View>
          
        <View style={styles.cadreIcon}>
          <IconYoutube
                name='film'
                size={40}/>
          <Text>Extrait</Text>
        </View>
      
    </View>
        <Text style={styles.section3}>Ajouté le : {item.date}</Text>
    </View>

    
    
    
</View>
    
    
  )
}

export default Detail

const styles = StyleSheet.create({

  header:{
    height:70,
    backgroundColor:'rgba(25, 54, 1, 0.8)',
    flexDirection:"row",
    justifyContent:"space-between",
    paddingHorizontal:20,
    paddingTop:10

},

imagebg:{

  height:300

},

textTitre:{
  
  backgroundColor:'rgba(90, 122, 64, 1)',
  height:250,
  bottom:30,
  borderTopStartRadius:20,
  borderTopEndRadius:20,
  
  
  

},

section2:{
  textAlign:'center',
  fontSize:25,
  textShadowRadius:5,
  textShadowColor:'green',
  color:'white',
  paddingTop:20
  

},
section3:{
  paddingHorizontal:20,
  textAlign:'left',
  fontWeight:'400',
  color:'rgba(33, 72, 2, 1)',
  textShadowRadius:2,
  textShadowColor:'green',
  fontSize:16,
  bottom:100
  
},

textDesc:{
  backgroundColor:'rgba(238, 253, 226, 1)',
  height:350,
  top:20,
  borderTopStartRadius:20,
  borderTopEndRadius:20,
  /* bottom:220 */
 
},
section4:{

  textAlign:'left',
  fontSize:23,
  textShadowRadius:5,
  textShadowColor:'green',
  color:'rgba(33, 72, 2, 1)',
  padding:20
},
section5:{
  paddingHorizontal:20,
  fontWeight:'400',
  color:'rgba(33, 72, 2, 1)',
  textShadowRadius:2,
  textShadowColor:'green',
  fontSize:19
 

},
iconList:{
  /* backgroundColor:'rgba(90, 122, 64, 1)', */
  /* height:150, */
 /*  bottom:210, */
  borderTopWidth:2,
  borderColor:'white',
  flexDirection:'row',
  justifyContent:'space-around',
  bottom:180,
  paddingTop:10
},
cadreIcon:{
  
  flexDirection:'column',
  
  height:90,
  width:90,
  padding:15,
  


  
 
  
 
}

})