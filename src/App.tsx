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
import { Bubbles } from './components/bubbles/bubbles';
import './style.scss';

export class App extends React.Component<{}, never> {
    render() {
        return <React.Fragment>
            <Bubbles />
            <header>
                <Title />
                <nav>
                    <Menu />
                </nav>
            </header>
            <section className="content">
                <main className="content-main">
                    <ReactRouterDOM.Routes>
                        <ReactRouterDOM.Route path="/" element={<Stories />} />
                        <ReactRouterDOM.Route path="/author" element={<Author />} />
                        <ReactRouterDOM.Route path="/contact" element={<Contact />} />
                        <ReactRouterDOM.Route path="/contact-thanks" element={<ContactThanks />} />
                        <ReactRouterDOM.Route path="/resources" element={<Resources />} />
                        <ReactRouterDOM.Route path="/blog" element={<Blog />} />
                    </ReactRouterDOM.Routes>
                </main>
                <aside className="content-aside">
                    <ReactRouterDOM.Routes>
                        <ReactRouterDOM.Route path="/blog" element={<BlogSideBar />} />
                    </ReactRouterDOM.Routes>
                    <SideBar />
                </aside>
            </section>
        </React.Fragment>;
    }
}
