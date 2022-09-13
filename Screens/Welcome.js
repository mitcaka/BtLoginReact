import React from 'react';
import {Text, View, Image,ImageBackground} from 'react-native';

function Welcome(props){
    return <View style = {{
        backgroundColor : 'white',
        flex: 1,
    }}>
    <ImageBackground
        source = {require('../assets/background.jpg')}
        resizeMode = 'cover'
        style= {{
            flex : 1,
        }}
        > 
    <View style = {{
        flexDirection : 'row',
        height : 50,
        justifyContent: 'flex-start',
        alignItems: 'center',
    }}>
        <Image style = {{
            width : 30,
            height : 30,
            marginStart : 10,
            marginEnd : 5,
        }}
            source = {require('../assets/icon_fire.png')} 
        />
        <Text style = {{
            color : 'white'
        }}> 
            YOURCOMPANY.CO
        </Text>
        <View style ={{flex : 1}}/>
        <Image style = {{
            width : 20,
            height : 20,
            tintColor : 'white',
            marginEnd : 10
        }}
            source = {require('../assets/icon_question.png')} 
        />
    </View>
    </ImageBackground>
    </View>
}
export default Welcome