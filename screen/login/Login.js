import {StyleSheet, Text, View, Image, StatusBar, TextInput, TouchableOpacity, Alert, Modal, ActivityIndicator } from 'react-native'
import React, { useState } from 'react'


const Login = ({navigation}) => {
    const [username, setUsername] = useState("");
    const [password, setPasssword] = useState("");
    const [selected, setSelection] = useState(false);
    const [aman, setAman] = useState (true);
    const [isFocused, setIsFocused] = useState(false);
    const [modal, setModal] = useState(false)

    const focus = ()=>{
        setIsFocused(true)
    }
    
    const blur = () => {
        setIsFocused(false);
    };
    
    const isSelected = ()=>{
        setSelection(!selected);
    };

    const cariAman = ()=>{
        setAman(!aman)
    }

    const loading = ()=>{
        
    }
    const masuk =()=>{
        navigation.navigate("Home")
    }
    const login = () => {
        
		return fetch('https://dev-disambi.sandboxindonesia.id/api/auth/login/',{
			method: 'POST',
			headers: {
			  Accept: 'application/json',
			  'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				username:username,
				password:password
			  }),
			
		  })
		.then(response => response.json())
		.then(json => {
			if(json?.data){
                setModal(true)
                console.log(json);
                setTimeout(() => {
                    Alert.alert(
                        'Peringatan',
                        'Apakah Yakin Anda ingin berpindah ke halaman lain?',
                        [
                          {
                            text: 'Yakin',
                            onPress: () => masuk(),
                          },
                          {
                            text: 'Nggak Yakin',
                            onPress: () => console.log('Batal'),
                          },
                        ],
                      );
                    }, 7000);
                  
			}
			else{
				Alert.alert(json?.message)
			}
		})
		.catch(error => {
		console.error(error);
		});
	}

  return (
    <View style={styles.container}>
      <StatusBar barStyle={'dark-content'} backgroundColor={'white'}/>

      {/* Header */}
      <Image source={require('../assets/Sisambi.png')} style={styles.icon}/>
      <Text style={styles.text}>DISAMBI</Text>

        {/* Username Input */}
      <View>
        <Text style={styles.text1}>Username</Text>
        <TextInput 
        placeholder='Masukan username'
        placeholderTextColor={'black'}
        style={[styles.Input, {borderColor: isFocused ? 'blue' : 'gray',}]}
        value={username}
        onChangeText={text => setUsername(text)}
        onFocus={focus}
        onBlur={blur}
        />


        {/* Password Input */}
        <View style={styles.bawah}>
        
        <Text style={styles.text1}>Password</Text>

        <View style={[styles.pass, {borderColor: isFocused ? 'gray' : 'blue',}]}>
        <TextInput placeholder='Masukan Password' 
        placeholderTextColor={'black'}
        style={[styles.Input1]}
        onChangeText={text => setPasssword(text)}
        value={password}
        secureTextEntry={aman}
        onFocus={blur}
        onBlur={focus}
        />

        <TouchableOpacity onPress={cariAman}>
        {aman ? (
        <Text style={styles.text4}>Show</Text>
         ) :
        (
        <Text style={styles.text4}>Hide</Text>
        )}
        </TouchableOpacity>

        </View>

        
        {/* Ingatkan Saya */}
        <View style={styles.bagian_check}>
        <TouchableOpacity onPress={isSelected} activeOpacity={0.7}>

        {selected ? 
        ( 
        <Image source={require('../assets/check.png')} style={styles.check}/>
        ) : 
        (   
        <View style={styles.check1}></View>  
        )}

        </TouchableOpacity>
        <Text style={styles.text3}>Ingatkan saya</Text>
        </View>
        </View>

        {/* Log in Button */}
        <View style={styles.bawah1}>
            <TouchableOpacity style={styles.tombol} onPress={()=> login()}>
                <Text style={styles.text2}>Log in</Text>
            </TouchableOpacity>
        </View>
      </View>

        {/* Modal */}
        <Modal
        visible={modal}
        animationType="slide"
        transparent={true}
      >

        <View style={styles.modal}>
            <View style={styles.bg_modal}>
                <ActivityIndicator size={'large'} color={'black'}/>
            </View>
        </View>
      </Modal>
    </View>
  )
}

export default Login

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'white',
        alignItems:'center'
    },
    text:{
        fontWeight:'bold',
        color:"black",
        fontSize:35
    },
    text1:{
        marginTop:10,
        fontWeight:'bold',
        color:'black'
    },
    text2:{
        fontWeight:'bold',
    },
    text3:{
        marginLeft:10,
        color:'black'
    },
    icon:{
        width:150,
        height:150,
        marginTop:30
    },
    Input:{
        color:'black',
        width:300,
        height:50,
        backgroundColor:'white',
        elevation:5,
        borderRadius:5,
        borderWidth:1
    },
    Input1:{
        width:250,
        color:'black',
    },
    bawah:{
        marginTop:20,
        elevation:5
    },
    tombol:{
        alignItems:'center',
        justifyContent:'center',
        width:250,
        height:50,
        backgroundColor:'#0076d6',
        borderRadius:10,
    },
    bawah1:{
        alignItems:'center',
        marginTop:20
    },
    button:{
        width:20,
        height:20
    },
    check:{
        width:25,
        height:25,
        backgroundColor:'black',
        borderRadius:5
    },
    check1:{
        width:25,
        height:25,
        backgroundColor:'white',
        borderRadius:5,
        elevation:5
    },
    bagian_check:{
        flexDirection:'row',
        marginTop:20
    },
    pass:{
        width:300,
        height:50,
        backgroundColor:'white',
        elevation:5,
        borderRadius:5,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        borderWidth:1
    },
    mata:{
        width:25,
        height:25,
    },
    text4:{
        color:'black',
        fontSize:12,
        marginRight:10
    },
    modal:{
        alignItems:'center',
        justifyContent:'center',
        flex:1
    },
    bg_modal:{
        height: 100,
        width: 100,
        borderRadius: 10,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor:'#f2ece0'
    }
})