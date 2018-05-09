import * as React from 'react';
import * as ReactRouterDOM from 'react-router-dom';
import { Menu } from './components/menu/menu';
import { Title } from './components/title/title';
import { Content } from './components/content/content';
import './style.scss';

export class App extends React.Component<{}, never> {
    render() {
        return <React.Fragment>
            <Title />
            <Menu />
            <Content />
        </React.Fragment>;
    }
}