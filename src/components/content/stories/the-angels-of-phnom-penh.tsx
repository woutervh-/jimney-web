import * as React from 'react';
import { Story } from './story';

export class TheAngelsOfPhnomPenh extends React.PureComponent<{}, never> {
    renderDescription() {
        return <React.Fragment>
            <p>The NeoAngkor People's Alliance has been conquered, the war against the Java-Celebes Military Junta lost, but mecha pilot Ho Bình Ça fights on. A solitary sniper in Phnom Penh, she does what she can to remove Junta agents from her city. When her old commander, now insurrection leader, Kattina, contacts Ça with the location of a last, friendly stronghold, in which it is said a special caste of the mecha Angels survived, at last, there seems to be an opportunity to vanquish the enemy once and for all.</p>
            <p>Hope and doubt warring within herself, Ça packs up the new life she's made, setting out to find the missing Angels of Death, the few mecha powerful enough to take on the Junta. But on her trail is the Junta Captain Siti, and she will stop at nothing until every last breath of the insurrection is quelled and the Alliance's military is dead.</p>
        </React.Fragment>;
    }

    render() {
        return <Story
            title="The Angels of Phnom Penh"
            preview={{ type: 'amazon', asin: 'B0CYY4P9KJ' }}
            description={this.renderDescription()}
        />;
    }
}
