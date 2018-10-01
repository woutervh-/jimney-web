import * as React from 'react';
import { Story } from './story';
import * as IntoTheDeepImage from 'images/into-the-deep.png?size=236';

export class IntoTheDeep extends React.Component<{}, never> {
    renderDescription() {
        return <React.Fragment>
            <p>Description</p>
        </React.Fragment>;
    }

    render() {
        return <Story
            title="Into the Deep"
            image={IntoTheDeepImage}
            imageOffsetY={0}
            description={this.renderDescription()}
        />;
    }
}
