import * as React from 'react';
import { Story } from './story';

export class ElegyOfTheStars extends React.PureComponent<{}, never> {
    renderDescription() {
        return <React.Fragment>
            <p>On the planet of Glast Oria's only missive is survival, against the cold, the hunger, the Priests of the Seirios, the Administration of the planet, but when Quinn, another urchin, saves her life from the Administration and lets her stay in his hideout, her allegiance to only herself begins to change.</p>
            <p>Over time, a reluctant trust between them forms, and Quinn proposes a heist to steal food from the local cult.</p>
            <p>Their plan turns to action in early winter, and at first seems like a success, but once inside the Chantry, the Seirios Cult's headquarters, everything goes terribly wrong, and both of them might not survive to see the planet's spring.</p>
        </React.Fragment>;
    }

    render() {
        return <Story
            title="Elegy of the Stars"
            preview={{ type: 'amazon', asin: 'B07K57SQQ4', ref: 'cm_sw_r_kb_dp_oNU5BbA3D2QX4' }}
            description={this.renderDescription()}
        />;
    }
}
