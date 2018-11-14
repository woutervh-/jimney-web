import * as React from 'react';
import * as ReactRouterDOM from 'react-router-dom';
import { Menu } from './components/menu/menu';
import { Title } from './components/title/title';
import { Stories } from './components/content/stories/stories';
import { Author } from './components/content/author/author';
import { Contact } from './components/content/contact/contact';
import { Resources } from './components/content/resources/resources';
import { Blog } from './components/content/blog/blog';
import { SideBar } from './components/side-bar/side-bar';
import { BlogSideBar } from './components/side-bar/blog/blog-side-bar';
import { ContactThanks } from './components/content/contact/contact-thanks';
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
                <main className="content-main">
                    <ReactRouterDOM.Route exact path="/" component={Stories} />
                    <ReactRouterDOM.Route path="/author" component={Author} />
                    <ReactRouterDOM.Route path="/contact" component={Contact} />
                    <ReactRouterDOM.Route path="/contact-thanks" component={ContactThanks} />
                    <ReactRouterDOM.Route path="/resources" component={Resources} />
                    <ReactRouterDOM.Route path="/blog" component={Blog} />
                </main>
                <aside className="content-aside">
                    <ReactRouterDOM.Route path="/blog" component={BlogSideBar} />
                    <SideBar />
                </aside>
            </section>
        </React.Fragment>;
    }
}
