import { StyleSheet, Text, View, ImageBackground } from 'react-native'
import React from 'react'
import { Card, Button, Icon } from '@rneui/themed';

import Incon2 from 'react-native-vector-icons/MaterialIcons'
import Detail from '../Detail';
import Icone3 from 'react-native-vector-icons/AntDesign'

import { useNavigation } from '@react-navigation/native';



const MaxiVideo = ({item}) => {

  const navigation = useNavigation();
  return (
    <View style={styles.block}>
      <View style={styles.imagecolor}>
          <Card.Title style={{ 
                        fontSize:20,
                        top:2,
                        textAlign:'left',
                        
                      color:'rgba(236, 255, 220, 0.8)', }}
                        >{item.titre}</Card.Title>
          <Card.Divider />
        </View>
          <ImageBackground style={{height:200,
                                    flex: 1, 
                                    alignItems:'center',
                                    justifyContent:'center',
                                    backgroundColor:'rgba(255, 255, 255, 1)',
                                  }}
                                    source={item.image}
                                    >

              <Icone3 
                      name='playcircleo' 
                      size={70}  
                      color='rgba(211, 246, 174, 0.7)'
                      onPress={() => navigation.navigate('Detail',{
                        item : item
                        
                      })} 
                      
                      
                      />
          </ImageBackground>
         {/*  <View style={styles.viewButton}>

                <Button
                icon={
                  <Incon2
                    name="read-more"
                    size={25}
                    color={'white'}
                    
                    iconStyle={{ marginLeft: 100 }}
                  />
                }
               
                buttonStyle={{
                  flex:1,
                  backgroundColor:'rgb(130, 149, 75)',
                  borderRadius:60,
                  flexDirection:'row',
                  justifyContent:'space-around',
                  alignItems:'center',
                  margin:10,
                  width:110,
                  borderColor:'rgb(125, 206, 19)',
                  borderWidth:1
                  
                  
                  
                }}
                title="Voir Plus"
                size='sm'
               
              />
          </View> */}
          
    </View>
  )
}

export default MaxiVideo

const styles = StyleSheet.create({

  block:{
    
    backgroundColor: 'rgba(90, 122, 64, 0.8)',
    marginHorizontal:20,
    marginBottom:20,
   
    
    
    

  },
  viewButton:{
    flex:1,
    flexDirection:'row',
    justifyContent:'center',
    
    bottom:10,
    
    
    
    

  },
  imagecolor:{
   
    borderTopStartRadius:20,
    borderTopEndRadius:20,
    height:40,
    
  },
  iconeImage:{
    flex:1,
    
    
    alignContent:'center'

  }
    
})