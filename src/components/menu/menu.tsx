import * as React from 'react';
import * as ReactRouterDOM from 'react-router-dom';
import './style.scss';

export class Menu extends React.Component<{}, never> {
    render() {
        return <ul className="menu">
            <li><ReactRouterDOM.Link className="menu-item" to="/">Home</ReactRouterDOM.Link></li>
            <li><ReactRouterDOM.Link className="menu-item" to="/stories">Stories</ReactRouterDOM.Link></li>
            <li><ReactRouterDOM.Link className="menu-item" to="/author">Author</ReactRouterDOM.Link></li>
            <li><ReactRouterDOM.Link className="menu-item" to="/resources">Resources</ReactRouterDOM.Link></li>
            <li><ReactRouterDOM.Link className="menu-item" to="/contact">Contact</ReactRouterDOM.Link></li>
        </ul>;
    }
}
