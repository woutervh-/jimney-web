import * as React from 'react';
import { Story } from './story';

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
            preview={{ type: 'amazon', asin: 'B01H5RDWUU', ref: 'cm_sw_r_kb_dp_Y709AbXHQT5BD' }}
            description={this.renderDescription()}
        />;
    }
}
