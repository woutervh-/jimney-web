import * as React from 'react';
import * as ReactDOMServer from 'react-dom/server';
import { App } from './app';
import * as ReactRouterDOM from 'react-router-dom'

export default (location: string) => ReactDOMServer.renderToString(
    <ReactRouterDOM.StaticRouter location={location} context={{}}>
        <App />
    </ReactRouterDOM.StaticRouter>
);
