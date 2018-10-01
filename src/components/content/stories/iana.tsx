import * as React from 'react';
import { Story } from './story';
import * as IanaImage from 'images/iana.png?size=236';

export class Iana extends React.Component<{}, never> {
    renderDescription() {
        return <React.Fragment>
            <p>It is the year 4000.</p>
            <p>A young synth is in pursuit of an artifact that will help prevent the impending apocalypse.</p>
        </React.Fragment>;
    }

    render() {
        return <Story
            title="Iana"
            image={IanaImage}
            imageOffsetY={0}
            description={this.renderDescription()}
        />;
    }
}
