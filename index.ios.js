/*
 A REDUX DEFINITION:

 THE STORE:
 An object that holds the application's data

 ACTION:
 An object that tells the reducer how to change its data

 REDUCER:
 a function that returns some data

 STATE:
 Data for our app to use
 */

import { AppRegistry } from 'react-native';
import App from './src/App'

AppRegistry.registerComponent('tech_stack', () => App);