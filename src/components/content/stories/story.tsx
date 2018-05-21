import * as React from 'react';

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

export interface StoryProps {
    preview: Preview;
    title: string;
    description: React.ReactNode;
}

export class Story extends React.Component<StoryProps, never> {
    renderPreview() {
        if (this.props.preview.type === 'image') {
            return <aside className="story-preview-image-container">
                <img className="story-preview-image" src={this.props.preview.image} />
                <div className="story-preview-image-caption">Coming soon</div>
            </aside>;
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
