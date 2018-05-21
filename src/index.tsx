import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { App } from './App';
import * as ReactRouterDOM from 'react-router-dom'
import './favicon-16x16.png';
import './favicon-32x32.png';
import './favicon-96x96.png';

if (PRODUCTION) {
    const container = document.getElementById('container');
    ReactDOM.hydrate(
        <ReactRouterDOM.BrowserRouter>
            <App />
        </ReactRouterDOM.BrowserRouter>,
        container
    );
} else {
    const container = document.createElement('div');
    container.setAttribute('id', 'container');
    document.body.appendChild(container);

    ReactDOM.render(
        <ReactRouterDOM.HashRouter>
            <App />
        </ReactRouterDOM.HashRouter>,
        container
    );
}

