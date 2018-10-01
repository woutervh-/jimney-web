import * as React from 'react';
import { Story } from './story';
import * as CatchingFirefliesImage from '../../../images/catching-fireflies.png';

export class CatchingFireflies extends React.Component<{}, never> {
    renderDescription() {
        return <p>
            A young water genie has to convince his prey to join him in the depths.
        </p>;
    }

    render() {
        return <Story
            title="Catching Fireflies"
            image={CatchingFirefliesImage}
            imageOffsetY={0}
            description={this.renderDescription()}
        />;
    }
}
