import * as React from 'react';
import { Story } from './story';

export class WorldsOfMagic extends React.PureComponent<{}, never> {
    renderDescription() {
        return <React.Fragment>
            <p>An anthology of magical short stories.</p>
            <p>This anthology contains the stories:</p>
            <p>Seafarer (How did the princess fall in love with the pirate queen?)</p>
            <p>Lucy and the Magician (A young girl is being given the gift of friendship)</p>
            <p>Catching Fireflies (A young kelpie has to convince his prey to join him in the depths of the lake. At the bottom, the prey's dangerous task will be revealed)</p>
            <p>The Hungry Worlds (A thief steals a sword, but in exchange, she tries to save the village she stole it from from a danger that encompasses more than one world)</p>
            <p>Into the Still Places (Two races who've been at war for aeons. A rogue soldier. Two princes intent on saving their worlds. They will have to work together to save their citizens)</p>
            <p>The Path of Lost Souls (In a world far from our own, one becomes an adult by completing the Path of Lost Souls. It's one young man's turn to prove himself, even though his half-brother will sabotage his journey)</p>
            <p>More than half of Worlds of Magic's stories happen off-world, in worlds that aren't our own. Lucy and the Magician and Catching Fireflies alone are set in the real world, although it has been enhanced with magic. Worlds of Magic provide good bedtime stories and exciting stories of adventure and strange worlds.</p>
        </React.Fragment>;
    }

    render() {
        return <Story
            title="Worlds of Magic"
            preview={{ type: 'amazon', asin: 'B07L6KQM28', ref: 'cm_sw_r_kb_dp_wMbdCb03KB0AY' }}
            description={this.renderDescription()}
        />;
    }
}
