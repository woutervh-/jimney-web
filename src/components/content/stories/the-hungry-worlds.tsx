import * as React from 'react';
import { Story } from './story';

export class TheHungryWorlds extends React.PureComponent<{}, never> {
    renderDescription() {
        return <p>
            After stealing an expensive sword, thief Ristar's conscience leads her to investigate the source of ravenous energy coming from the Troll's Forest.
        </p>;
    }

    render() {
        return <Story
            title="The Hungry Worlds"
            preview={{ type: 'amazon', asin: 'B01H5993E2', ref: 'cm_sw_r_kb_dp_J809Ab6SSV5Z8' }}
            description={this.renderDescription()}
        />;
    }
}
