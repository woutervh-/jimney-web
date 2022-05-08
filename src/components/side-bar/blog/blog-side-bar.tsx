import * as React from 'react';
import { blogApi } from '../../../api/blog';
import { Entry } from '../../../api/blog-convert-document';
import { BlogIndex } from '../../content/blog/blog-index';

interface BlogSideBarState {
    entries: Entry[] | Error | null;
}

export class BlogSideBar extends React.PureComponent<{}, BlogSideBarState> {
    state: BlogSideBarState = {
        entries: null
    };

    dereference: (() => void) | undefined = undefined;

    async componentDidMount() {
        try {
            const posts = await blogApi.getPosts();
            this.dereference = posts.dereference;
            this.setState({ entries: posts.entries });
        } catch (error) {
            this.setState({ entries: error as Error });
        }
    }

    componentWillUnmount() {
        if (this.dereference) {
            this.dereference();
        }
    }

    renderLoading() {
        return <div className="lds-ripple">
            <div></div>
            <div></div>
        </div>;
    }

    render() {
        if (this.state.entries === null) {
            return this.renderLoading();
        } else if (this.state.entries instanceof Error) {
            return null;
        } else {
            return <BlogIndex entries={this.state.entries} />
        }
    }
}
