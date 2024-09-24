import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import babelConfig from '../../babel.config'

const HomeScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
        <TouchableOpacity onPress={()=>navigation.goBack()}>
            <Text style={styles.Text1}>Kembali</Text>
        </TouchableOpacity>
        <View style={styles.bawah}>
            <Text style={styles.Text}>Selamat Anda Berhasil Login</Text>
        </View>
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'white',
        
    },
    Text:{
        marginTop:100,
        color:'black',
        fontSize:50
    },
    Text1:{
        marginTop:10,
        marginLeft:20,
        color:'red',
        fontSize:20
    },
    bawah:{
        alignItems:'center',
        justifyContent:'center'
    }
})