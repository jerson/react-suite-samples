import React from 'react';
import ReactDOM from 'react-dom';
import Darker from './build/themes/Darker';
import Theme from 'react-suite/build/modules/theme/Theme';

Theme.init({
    defaultTheme: 'Darker',
    themes: {
        Darker
    }
});
Theme.setTheme('Darker');


const mountApp = document.getElementById('root');
const App = require('./build').default;
ReactDOM.render(
    <App/>,
    mountApp
);

if (module.hot) {
    module.hot.accept('./build', () => {
        const NextApp = require('./build').default;
        ReactDOM.render(
            <NextApp/>,
            mountApp
        );
    });
}


