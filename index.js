/** @format */

// import {AppRegistry} from 'react-native';
// import App from './App';
import {name as appName} from './app.json';

// AppRegistry.registerComponent(appName, () => App);

import { AppRegistry, Dimensions } from 'react-native';
import { DrawerNavigator } from 'react-navigation';
// import App from './App';
//Components
import HomeComponent from './components/HomeComponent';
import InfoComponent from './components/InfoComponent';
import TableComponent from './components/tables/TableComponent';
// import SettingsComponent from './components/SettingsComponent';
// import CloudComponent from './components/CloudComponent';
//Screen names
import { Home, Info} from './screenNames';
//Screen size
var {height, width} = Dimensions.get('window');

let routeConfigs = {
    Home: {
        path: '/',
        screen: HomeComponent,
    },
    Info: {
        path: '/info',
        screen: InfoComponent,
    },
    Tables: {
        path: '/tables',
        screen: TableComponent,
    }

};
let drawerNavigatorConfig = {    
    initialRouteName: Home,
    drawerWidth: width / 2,
    drawerPosition: 'left',
    drawerOpenRoute: 'DrawerOpen',
    drawerCloseRoute: 'DrawerClose',
    drawerToggleRoute: 'DrawerToggle',  
    // drawerBackgroundColor: 'orange',
    contentOptions: {
        activeTintColor: 'red',
    },
    
};
const App = DrawerNavigator(routeConfigs, drawerNavigatorConfig);
AppRegistry.registerComponent(appName, () => App);