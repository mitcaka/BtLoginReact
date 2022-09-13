import React from 'react';
import {Text, View,Image} from 'react-native';
import ButtonThree from '../components/ButtonThree'
import MyInput from '../components/MyInput'

function AutoLogin (props){
    return <View style = {{
        backgroundColor : 'white',
        flex: 1,
    }}>
    <Image style = {{
        width : 30,
        height : 30,
        marginStart : 5,
        marginEnd : 5,
        marginBottom : 25
    }}
        source = {require('../assets/icon_back.png')} 
    />
        <Text style={{
            color : '#3975E8',
            fontSize : 30,
            marginBottom : 5
        }}> Sign in</Text>
    <View style = {{
        backgroundColor : 'white',
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
    }}>
        <MyInput placeholder='Email or Phone Number'/>
        <MyInput placeholder='Password' />
        <ButtonThree text = 'Log in' backgroundColor = '#3975E8'/>
        <Text style = {{
            fontSize: 20,
            fontWeight: 'bold',
            marginBottom : 20
        }}> OR </Text>
        <ButtonThree text = 'Sign in' backgroundColor = '#3B5998'/>
    </View>

    </View>
}
export default AutoLogin