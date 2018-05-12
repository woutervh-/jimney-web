import * as React from 'react';

export interface StoryProps {
    image: string;
    title: string;
    description: React.ReactNode;
}

export class Story extends React.Component<StoryProps, never> {
    render() {
        return <div className="story">
            <img src={this.props.image} className="story-cover" />
            <h3 className="story-title">{this.props.title}</h3>
            <div>{this.props.description}</div>
        </div>;
    }
}
