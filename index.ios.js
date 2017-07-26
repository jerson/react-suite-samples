import React, {Component} from 'react';
import {AppRegistry} from 'react-native';
import Darker from './build/themes/Darker';
import Theme from 'react-suite/build/modules/theme/Theme';
import codePush from 'react-native-code-push';

// Theme.init({
//     defaultTheme: 'Darker',
//     themes: {
//         Darker
//     }
// });
// Theme.setTheme('Darker');

class AppWindow extends Component {

    componentDidMount() {

        !__DEV__ && codePush.sync({
            updateDialog: true,
            installMode: codePush.InstallMode.IMMEDIATE
        });

    }

    render() {
        const App = require('./build').default;
        return <App/>;
    }
}

AppRegistry.registerComponent('ReactSuiteSamples', () => AppWindow);