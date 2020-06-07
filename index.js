/**
 * @format
 */

import { AppRegistry } from 'react-native';
import App from './App';
import { name as appName } from './app.json';
// import notificationHelper from './app/utils/notificationHelper';

// AppRegistry.registerHeadlessTask('RNFirebaseBackgroundMessage', () => notificationHelper); // <-- Add this line
AppRegistry.registerComponent(appName, () => App);
