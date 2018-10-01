import * as React from 'react';
import * as ReactRouterDOM from 'react-router-dom';
import { Menu } from './components/menu/menu';
import { Title } from './components/title/title';
import { Stories } from './components/content/stories/stories';
import { Author } from './components/content/author/author';
import { Contact } from './components/content/contact/contact';
import { Resources } from './components/content/resources/resources';
import { Read } from './components/content/read/read';
import './style.scss';

export class App extends React.Component<{}, never> {
    render() {
        return <React.Fragment>
            <header>
                <Title />
                <nav>
                    <Menu />
                </nav>
            </header>
            <section className="content">
                <ReactRouterDOM.Route exact path="/" component={Author} />
                <ReactRouterDOM.Route path="/stories" component={Stories} />
                <ReactRouterDOM.Route path="/contact" component={Contact} />
                <ReactRouterDOM.Route path="/resources" component={Resources} />
                <ReactRouterDOM.Route path="/read" component={Read} />
            </section>
        </React.Fragment>;
    }
}