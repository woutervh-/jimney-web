import * as React from 'react';
import { Story } from './story';
import * as ElegyOfTheStarsImage from '../../../images/elegy-of-the-stars.jpg';

export class ElegyOfTheStars extends React.Component<{}, never> {
    renderDescription() {
        return `
        On the planet of Glast Oria's only missive is to survive, against the cold, the hunger, the Priests of the Seirios, the Administration of the planet, but when Quinn, another urchin, saves her life from the Administration and lets her stay in his hideout, her allegiance to only herself beings to change.
        Over time, a reluctant trust between them forms, and Quinn proposes a heist to steal food from the local cult.
        Their plan turns to action in early winter, and at first seems like a success, but once inside the Chantry, the Seirios Cult's headquarters, everything goes terribly wrong, and both of them might not survive to see the planet's spring.
        `;
    }

    render() {
        return <Story
            title="Elegy of the Stars"
            image={ElegyOfTheStarsImage}
            description={this.renderDescription()}
        />;
    }
}
