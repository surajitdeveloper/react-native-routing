/**
 * @format
 */


import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';


import { createStackNavigator } from '@react-navigation/stack';


import {AppRegistry} from 'react-native';
import App from './App';
import Login from "./Components/Auth/Login";
import Registration from "./Components/Auth/Registration";
import Routes from "./Routes";
import {name as appName} from './app.json';



AppRegistry.registerComponent(appName, () => App);
AppRegistry.registerComponent(appName, () => Login);
AppRegistry.registerComponent(appName, () => Registration);
AppRegistry.registerComponent(appName, () => Routes);

