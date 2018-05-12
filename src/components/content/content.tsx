import * as React from 'react';
import * as ReactRouterDOM from 'react-router-dom';
import './style.scss';
import { Home } from './home/home';
import { Stories } from './stories/stories';
import { Author } from './author/author';

export class Content extends React.Component<{}, never> {
    render() {
        return <div className="content">
            <ReactRouterDOM.Route exact path="/" component={Home} />
            <ReactRouterDOM.Route path="/stories" component={Stories} />
            <ReactRouterDOM.Route path="/author" component={Author} />
        </div>;
    }
}
