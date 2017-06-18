import React from 'react';
import ReactDOM from 'react-dom';
import App from './build';

const mountApp = document.getElementById('root');

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


