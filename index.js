/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable prettier/prettier */
/**
 * @format
 */

import {AppRegistry} from 'react-native';
import {Text} from 'react-native';
import {name as appName} from './app.json';
import MainScreen from './Screens/MainScreen';
import Welcome from './Screens/Welcome';
import Login from './Screens/Login';
import Signup from './Screens/Signup';
import AutoLogin from './Screens/AutoLogin';

let fakedProducts = [
    {
        productName: 'iphone13',
        year : 2019
    },
    {
        productName: 'iphone14',
        year : 2022
    }
]

AppRegistry.registerComponent(appName,
    () => () => <Signup />);
