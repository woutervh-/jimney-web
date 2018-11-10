import * as React from 'react';
import * as ReactRouterDOM from 'react-router-dom';

export interface PreviewImage {
    type: 'image';
    image: string;
}

export interface PreviewAmazon {
    type: 'amazon';
    asin: string;
    ref: string;
}

export type Preview = PreviewImage | PreviewAmazon;

export interface CaptionComingSoon {
    type: 'coming-soon';
}

export interface CaptionReadMore {
    type: 'read-more';
    link: string;
    text: string;
}

export type Caption = CaptionComingSoon | CaptionReadMore;

export interface StoryProps {
    preview: Preview;
    title: string;
    description: React.ReactNode;
    caption?: Caption;
}

export class Story extends React.PureComponent<StoryProps, never> {
    renderCaption() {
        if (this.props.caption) {
            if (this.props.caption.type === 'coming-soon') {
                return <div className="story-preview-image-caption">
                    Coming soon
                </div>;
            } else {
                return <div className="story-preview-image-caption">
                    <ReactRouterDOM.Link to={this.props.caption.link}>{this.props.caption.text}</ReactRouterDOM.Link>
                </div>;
            }
        }
    }

    renderPreview() {
        if (this.props.preview.type === 'image') {
            return <figure className="story-preview-image-container">
                <img className="story-preview-image" src={this.props.preview.image} width={236} />
                {this.renderCaption()}
            </figure>;
        } else {
            return <aside>
                <iframe
                    frameBorder={0}
                    allowFullScreen
                    className="story-preview-amazon"
                    // style={{ maxWidth: '100%' }}
                    src={`https://read.amazon.com/kp/card?asin=${this.props.preview.asin}&preview=newtab&linkCode=kpe&ref_=${this.props.preview.ref}`}
                />
            </aside>;
        }
    }

    render() {
        return <article className="story">
            {this.renderPreview()}
            <header>
                <h3 className="story-title">{this.props.title}</h3>
            </header>
            {this.props.description}
        </article>;
    }
}
