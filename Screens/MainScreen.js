/* eslint-disable prettier/prettier */
import React from 'react';
import {Text, View} from 'react-native';

import {sum2Number, sub2Number} from '../utilies/Calculator';

//component = function
//create a variable with reference to a function
const MainScreen = (props) => {
    //destructuring an object
    // eslint-disable-next-line prettier/prettier
    const {x,y} = props;
    const {person} = props;
    //const => let => var
    //destructuring person object
    const {name, age,email} = person;
    const {products} = props;
    return <View>
        <Text>{x} , {y}</Text> 
        <Text>Name = {name} , Age = {age} , Email = {email} </Text>
        {products.map(eachProduct => <Text>{eachProduct.productName},
            {eachProduct.year} 
            </Text>)}
        <Text>sum 2 and 3 = {sum2Number(2,3)} </Text>
    </View>
}
export default MainScreen
