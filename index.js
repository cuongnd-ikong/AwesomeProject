/**
 * @format
 */
import 'react-native-gesture-handler';
import 'react-native-reanimated';
import './global.css';
import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => App);
