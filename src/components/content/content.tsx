import * as React from 'react';
import * as ReactRouterDOM from 'react-router-dom';
import { Home } from './home/home';
import './style.scss';

export class Content extends React.Component<{}, never> {
    render() {
        return <div className="content">
            <ReactRouterDOM.Route exact path="/" component={Home} />
        </div>;
    }
}
