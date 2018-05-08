import * as React from 'react';
import * as ReactRouterDOM from 'react-router-dom';
import './style.css';

export class Menu extends React.Component<{}, never> {
    render() {
        return <ul className="menu">
            <li className="menu-item"><ReactRouterDOM.Link to="/">Home</ReactRouterDOM.Link></li>
            <li className="menu-item"><ReactRouterDOM.Link to="/stories">Stories</ReactRouterDOM.Link></li>
            <li className="menu-item"><ReactRouterDOM.Link to="/advice">Advice</ReactRouterDOM.Link></li>
            <li className="menu-item"><ReactRouterDOM.Link to="/about">About</ReactRouterDOM.Link></li>
            <li className="menu-item"><ReactRouterDOM.Link to="/contact">Contact</ReactRouterDOM.Link></li>
        </ul>;
    }
}
