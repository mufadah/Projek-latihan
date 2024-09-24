import { StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const Choice = ({navigation}) => {
  return (
    <View style={styles.container}>
    <StatusBar backgroundColor={'white'} barStyle={'dark-content'}/>
      <View style={styles.inti}>
            <Text style={styles.Text}>Pilih Metode Masuk</Text>
            <TouchableOpacity style={styles.button} onPress={()=> navigation.navigate('Login')}>
                <Text style={styles.Text1}>Log in</Text>
            </TouchableOpacity>

            <Text style={styles.Text2}>OR</Text>

            <TouchableOpacity style={styles.button1} onPress={()=> navigation.navigate('Register')}>
                <Text style={styles.Text1}>Register</Text>
            </TouchableOpacity>
      </View>
    </View>
  )
}

export default Choice

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'white',
        alignItems:'center',
        justifyContent:'center'
    },
    Text:{
        color:'black',
        fontSize:30
    },
    Text1:{
        fontWeight:'bold'
    },
    Text2:{
        color:'black',
        fontWeight:'bold',
        marginTop:30
    },
    button:{
        width:200,
        height:50,
        backgroundColor:'#0076d6',
        elevation:5,
        borderRadius:5,
        alignItems:'center',
        justifyContent:'center',
        marginTop:20
    },
    button1:{
        width:200,
        height:50,
        backgroundColor:'#0076d6',
        elevation:5,
        borderRadius:5,
        alignItems:'center',
        justifyContent:'center',
        marginTop:30
    },
    inti:{
        width:350,
        height:750,
        backgroundColor:'#f2ece1',
        alignItems:'center',
        justifyContent:'center',
        borderRadius:5,
        elevation:5
    }
})