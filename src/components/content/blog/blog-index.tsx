import * as React from 'react';
import { Entry } from '../../../api/blog-convert-document';
import './style.scss';

interface BlogIndexProps {
    entries: Entry[];
}

export class BlogIndex extends React.PureComponent<BlogIndexProps, never> {
    render() {
        return <div>
            <h4>Latest blog posts</h4>
            {this.props.entries.map((entry) => {
                return <div key={entry.id} className="blog-index-title">
                    <a href={`#${entry.id}`} dangerouslySetInnerHTML={{ __html: entry.title.content }} /> ({entry.updated.toDateString()})
                </div>;
            })}
            <p className="blog-index-hint">
                Want to read more? <a href="https://jasmingelinckauthor.blogspot.com/" target="_blank">Visit my blog here.</a>
            </p>
        </div>;
    }
}
