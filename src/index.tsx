import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { App } from './App';
import * as ReactRouterDOM from 'react-router-dom'

const container = document.getElementById('container');
ReactDOM.render(
    <ReactRouterDOM.HashRouter>
        <App />
    </ReactRouterDOM.HashRouter>,
    container
);
