import * as React from 'react';

export interface StoryProps {
    image: string;
    imageOffsetY: number;
    title: string;
    description: React.ReactNode;
}

export class Story extends React.Component<StoryProps, never> {
    render() {
        return <article>
            <figure className="story-image-container">
                <div className="story-image-crop">
                    <img className="story-image" style={{ marginTop: -this.props.imageOffsetY }} src={this.props.image} width={236} />
                </div>
                <div className="story-image-caption">Coming soon</div>
            </figure>
        </article>;
    }
}
