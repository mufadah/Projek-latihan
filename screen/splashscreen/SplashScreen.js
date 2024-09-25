import { Image, StatusBar, StyleSheet, Text, View } from 'react-native'
import React, {useEffect} from 'react'


const SplashScreen = ({navigation}) => {
    useEffect(()=>{
        setTimeout(() => {
          navigation.replace('Choice')
        }, 4000);
      })
    
  return (
    <View style={styles.container}>
      <StatusBar barStyle={'dark-content'} backgroundColor={'white'}/>
      <Image source={require('../assets/Sisambi.png')} style={styles.icon}/>
      {/* <Text style={styles.text}>Disambi</Text> */}
    </View>
  )
}

export default SplashScreen

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'white',
        alignItems:'center',
        justifyContent:'center'
    },
    text:{
        color:"black",
        fontSize:50
    },
    icon:{
        width:200,
        height:200
    }
})