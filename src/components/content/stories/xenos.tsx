import * as React from 'react';
import { Story } from './story';

export class Xenos extends React.PureComponent<{}, never> {
    renderDescription() {
        return <React.Fragment>
            <p>An anthology of weird and cosmic short stories, including cosmic horror, human made horror, and strange events.</p>
            <p>The stories included are:</p>
            <p>Moonfarer (A space explorer receives an emergency call on a desolate moon, but when he arrives to investigate, he encounters an inexplicable and terrible circumstance)</p>
            <p>2115 (As alien spaceships descend on Earth, a worn-out soldier, a drug-addicted medic, and a little girl have to fight for their survival)</p>
            <p>Of One Mind (A fire-crew is called to restore a destroyed laboratory, but the experiments done there were not detailed by the demand)</p>
            <p>Immortal (A creature of a different world seeks a new body to inhabit on Earth)</p>
            <p>Eye in the Sky (The epilogue)</p>
            <p>These stories will creep you out, but at the same time make you think about our world, and others.</p>
        </React.Fragment>;
    }

    render() {
        return <Story
            title="Xenos"
            preview={{ type: 'amazon', asin: 'B07L6KHNB9', ref: 'cm_sw_r_kb_dp_wMbdCbA9689F3' }}
            description={this.renderDescription()}
        />;
    }
}
