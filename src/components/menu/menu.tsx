import * as React from 'react';
import * as ReactRouterDOM from 'react-router-dom';
import './style.scss';

export class Menu extends React.Component<{}, never> {
    render() {
        return <ul className="menu">
            <li><ReactRouterDOM.NavLink className="menu-item" exact to="/">Stories</ReactRouterDOM.NavLink></li>
            <li><ReactRouterDOM.NavLink className="menu-item" to="/blog">Blog</ReactRouterDOM.NavLink></li>
            <li><ReactRouterDOM.NavLink className="menu-item" to="/resources">Resources</ReactRouterDOM.NavLink></li>
            <li><ReactRouterDOM.NavLink className="menu-item" to="/author">Author</ReactRouterDOM.NavLink></li>
            <li><ReactRouterDOM.NavLink className="menu-item" to="/contact">Contact</ReactRouterDOM.NavLink></li>
        </ul>;
    }
}
