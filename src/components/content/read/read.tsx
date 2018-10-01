import * as React from 'react';
import * as ReactRouterDOM from 'react-router-dom';
import { ElegyOfTheStars } from './elegy-of-the-stars/elegy-of-the-stars';

export class Read extends React.Component<{}, never> {
    render() {
        return <React.Fragment>
            <ReactRouterDOM.Route path="/read/elegy-of-the-stars" component={ElegyOfTheStars} />
        </React.Fragment>;
    }
}
