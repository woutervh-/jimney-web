import * as React from 'react';
import * as ReactDOMServer from 'react-dom/server';
import { App } from '../App';
import * as ReactRouterDOM from 'react-router-dom'

export default ReactDOMServer.renderToString(
    <ReactRouterDOM.StaticRouter location="/stories" context={{}}>
        <App />
    </ReactRouterDOM.StaticRouter>
);
