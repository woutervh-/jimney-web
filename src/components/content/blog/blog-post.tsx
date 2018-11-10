import * as React from 'react';
import { Entry } from './convert-document';
import './style.scss';

interface BlogPostProps extends Entry { }

export class BlogPost extends React.PureComponent<BlogPostProps, never> {
    renderContent() {
        if (this.props.content) {
            return <p dangerouslySetInnerHTML={{ __html: this.props.content.content }} className="blog-text" />;
        }
    }

    renderLink() {
        const alternateLink = this.props.links.find((link) => link.rel === 'alternate');
        if (alternateLink !== undefined) {
            return <a href={alternateLink.href} target="_blank">View on Blogspot</a>;
        } else {
            return <a href="https://jmtrent.blogspot.com" target="_blank">View on Blogspot</a>
        }
    }

    render() {
        return <div className="blog-post">
            <h3 id={this.props.id} dangerouslySetInnerHTML={{ __html: this.props.title.content }} className="blog-title" />
            <div className="blog-subtitle-container">
                <h5 className="blog-subtitle">
                    {this.props.updated.toDateString()} · {this.renderLink()}
                </h5>
            </div>
            {this.renderContent()}
        </div>;
    }
}
