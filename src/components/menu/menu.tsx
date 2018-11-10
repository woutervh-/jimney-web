import * as React from 'react';
import * as ReactRouterDOM from 'react-router-dom';
import './style.scss';

export class Menu extends React.PureComponent<{}, never> {
    render() {
        return <ul className="menu">
            <li><ReactRouterDOM.NavLink className="menu-item" to="/stories">Stories</ReactRouterDOM.NavLink></li>
            <li><ReactRouterDOM.NavLink className="menu-item" to="/blog">Blog</ReactRouterDOM.NavLink></li>
            <li><ReactRouterDOM.NavLink className="menu-item" to="/resources">Resources</ReactRouterDOM.NavLink></li>
            <li><ReactRouterDOM.NavLink className="menu-item" exact to="/">Author</ReactRouterDOM.NavLink></li>
            <li><ReactRouterDOM.NavLink className="menu-item" to="/contact">Contact</ReactRouterDOM.NavLink></li>
        </ul>;
    }
}
