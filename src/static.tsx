import * as React from 'react';
import * as ReactDOMServer from 'react-dom/server';
import { App } from './app';
import * as ReactRouterDOM from 'react-router-dom/server'

export default (location: string) => ReactDOMServer.renderToString(
    <ReactRouterDOM.StaticRouter location={location}>
        <App />
    </ReactRouterDOM.StaticRouter>
);
