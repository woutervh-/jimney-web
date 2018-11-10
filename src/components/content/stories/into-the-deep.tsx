import * as React from 'react';
import { Story } from './story';
import * as IntoTheDeepImage from 'images/into-the-deep.png?size=236';

export class IntoTheDeep extends React.PureComponent<{}, never> {
    renderDescription() {
        return <React.Fragment>
            <p>An anthology of short stories taking place deep down under the waves.</p>
            <p>Includes:</p>
            <p>· Catching Firelies</p>
            <p>· Out of the Depths</p>
            <p>Release date: coming soon!</p>
        </React.Fragment>;
    }

    render() {
        return <Story
            title="Into the Deep"
            preview={{ type: 'image', image: IntoTheDeepImage }}
            description={this.renderDescription()}
            caption={{ type: 'coming-soon' }}
        />;
    }
}
