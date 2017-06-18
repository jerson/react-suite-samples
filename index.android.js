'use strict';

import React, {Component} from 'react';
import {
    AppRegistry
} from 'react-native';
import App from './build';
import codePush from 'react-native-code-push';
//let codePushOptions = { checkFrequency: codePush.CheckFrequency.ON_APP_RESUME };

class AppWindow extends Component {

    componentDidMount() {

        !__DEV__ && codePush.sync({
            updateDialog: true,
            installMode: codePush.InstallMode.IMMEDIATE
        });

    }

    render() {
        return <App />;
    }
}

AppRegistry.registerComponent('ReactSuiteSamples', () => AppWindow);