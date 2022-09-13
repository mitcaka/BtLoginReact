import React from 'react';
import {Text, View,Image} from 'react-native';
import ButtonThree from '../components/ButtonThree'
import MyInput from '../components/MyInput'

function Signup (props){
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
        }}> Create new account</Text>
    <View style = {{
        backgroundColor : 'white',
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
    }}>
        <MyInput placeholder='Full Name'/>
        <MyInput placeholder='Phone Number'/>
        <MyInput placeholder='Email'/>
        <MyInput placeholder='Password'/>
        <ButtonThree text = 'Sign up' backgroundColor = '#3B5998' />

    </View>

    </View>
}
export default Signup