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
            preview={{ type: 'amazon', asin: 'B01H5RDX0Y', ref: 'cm_sw_r_kb_dp_O609AbD3RZWKX' }}
            description={this.renderDescription()}
        />;
    }
}
