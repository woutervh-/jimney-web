import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { App } from './App';
import * as ReactRouterDOM from 'react-router-dom'
import './favicon.ico';

const container = document.getElementById('container');
ReactDOM.render(
    <ReactRouterDOM.BrowserRouter>
        <App />
    </ReactRouterDOM.BrowserRouter>,
    container
);
