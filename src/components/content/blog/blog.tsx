import * as React from 'react';
import { BlogPost } from './blog-post';
import { blogApi } from '../../../api/blog';
import { Entry } from '../../../api/blog-convert-document';
import './style.scss';

interface BlogState {
    entries: Entry[] | Error | null;
}

export class Blog extends React.PureComponent<{}, BlogState> {
    state: BlogState = {
        entries: null
    };

    dereference: (() => void) | undefined = undefined;

    async componentDidMount() {
        try {
            const posts = await blogApi.getPosts();
            this.dereference = posts.dereference;
            this.setState({ entries: posts.entries });
        } catch (error) {
            this.setState({ entries: error });
        }
    }

    componentWillUnmount() {
        if (this.dereference) {
            this.dereference();
        }
    }

    renderLoading() {
        return <React.Fragment>
            <div className="lds-ripple">
                <div></div>
                <div></div>
            </div>
            <noscript>
                This page requires JavaScript to be enabled.
                If this is not an option for you, please visit my blog directly: <a href="https://jasmingelinckauthor.blogspot.com/" target="_blank">on Blogspot</a>.
            </noscript>
        </React.Fragment>;
    }

    renderError(error: Error) {
        return <React.Fragment>
            <h3>Whoops! An error happened while loading the blog...</h3>
            <div>This is what we know:</div>
            <div className="error">
                {error.message}
            </div>
            <div>
                If it keeps happening, please inform me of this error, and in the meantime visit my blog directly: <a href="https://jasmingelinckauthor.blogspot.com/" target="_blank">on Blogspot</a>.
            </div>
        </React.Fragment>;
    }

    renderBlog(entries: Entry[]) {
        return <div className="blog-posts">
            {entries.map((entry) => {
                return <BlogPost key={entry.id} {...entry} />;
            })}
        </div>;
    }

    render() {
        if (this.state.entries === null) {
            return this.renderLoading();
        } else if (this.state.entries instanceof Error) {
            return this.renderError(this.state.entries);
        } else {
            return this.renderBlog(this.state.entries);
        }
    }
}
