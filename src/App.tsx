import * as React from 'react';
import * as ReactRouterDOM from 'react-router-dom';
import { Menu } from './components/menu/menu';
import { Title } from './components/title/title';
import { Home } from './components/content/home/home';
import { Stories } from './components/content/stories/stories';
import { Author } from './components/content/author/author';
import { Contact } from './components/content/contact/contact';
import { Resources } from './components/content/resources/resources';
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
                <ReactRouterDOM.Route exact path="/" component={Home} />
                <ReactRouterDOM.Route path="/stories/" component={Stories} />
                <ReactRouterDOM.Route path="/author/" component={Author} />
                <ReactRouterDOM.Route path="/contact/" component={Contact} />
                <ReactRouterDOM.Route path="/resources/" component={Resources} />
            </section>
        </React.Fragment>;
    }
}