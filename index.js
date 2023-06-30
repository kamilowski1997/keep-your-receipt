import { AppRegistry } from 'react-native';
import './src/configs/i18nConfig';
import './src/configs/reactNativePaperDatesConfig';
import App from './src/App';
import { name as appName } from './app.json';

AppRegistry.registerComponent(appName, () => App);
