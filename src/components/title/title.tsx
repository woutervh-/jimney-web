import * as React from 'react';
import * as ReactRouterDOM from 'react-router-dom';
import './style.scss';

export class Title extends React.Component<{}, never> {
    render() {
        return <h1 className="title">Jasmin Gelinck</h1>;
    }
}
