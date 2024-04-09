import * as React from 'react';
import { Story } from './story';

export class TheWishlordTrials extends React.PureComponent<{}, never> {
    renderDescription() {
        return <React.Fragment>
            <p>Glass is a beautiful object. Glass is owned. Glass's purpose is to be beautiful, to delight her father's visitors with dances, smiles, or just by standing still and letting the light gleam off of her. Then her father disappears, and Glass has only one option to find him: join the Wishlord Trials. The Wishlord, the City's overlord, will allow the one winner of the violent gauntlet to ask him a question.</p>
            <p>Initially, Glass knows what she wants, but as she meets other people, old and young, angry and friendly, she learns how they see her, and think she isn't free.</p>
            <p>As Glass fights her way through the Trials, she'll have to conquer men and monsters, wrangle the hardest questions about herself, and ultimately make the most difficult decision of her life.</p>
            <p>Is her father who she thinks he is, or is he really only her owner? And who is the woman called Harrow, causing distress in the city because her life's work was stolen before she could build it?</p>
            <p>Ultimately, Glass will have to decide, whether she'll continue being her father's pet, a sheltered wonder, or if she'll listen to other voices, and become a person in her own right.</p>
        </React.Fragment>;
    }

    render() {
        return <Story
            title="The Wishlord Trials"
            preview={{ type: 'amazon', asin: 'B0CYHL3FF2' }}
            description={this.renderDescription()}
        />;
    }
}
