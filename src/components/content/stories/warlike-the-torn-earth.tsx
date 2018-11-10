import * as React from 'react';
import { Story } from './story';

export class WarlikeTheTornEarth extends React.PureComponent<{}, never> {
    renderDescription() {
        return <React.Fragment>
            <p>A jungle adventure set on Earth in the year 2250. A torn Earth where people live in small tribes like they did before we evolved. An Earth poisoned by radiation, toxins, and experiments.</p>    
            <p>In the far future on Earth, the names of most cities have been forgotten, and wastelands have taken their places. The jungle-forest, a place of primeval predators and a barely surviving half-human tribe, the desert, sands in every direction the eye can see, and mountain ridges too tall too climb that hold ancient secrets. Thresha's lived in the jungle-forest all her seventeen cycles, a young woman too stubborn to admit defeat when the tribe's strongest war party is slaughtered by the raptors, ancient reptilian giants that were supposed to have been extinct thousands of years ago. Thresha is convinced she can kill the beasts and free her tribe once and for all, but she needs to throw her spears wider than elder Kava allows to do it. Thresha soon finds herself trapped in an ancient maze, in a world before a time anyone of her tribe can remember, faced with monsters she couldn't have imagined and, when she is discovered, exile. But for Thresha, the only way out is forward, and to the east, the Sands and the weapons they hold beckon. The Sands, the end of the world, which no one has ever returned from, and no one believes there is an end to.</p>
            <p>It's only when she meets Zon, an almost-outlaw, and his shooting tubes, that her hopes of destroying the raptors earns a chance to succeed. But Zon has problems of his own, a horde of metal men so different from anything Tresha has ever known, and those will have to be dealt with before the raptors can be destroyed once and for all.</p>
        </React.Fragment>;
    }

    render() {
        return <Story
            title="Warlike: The Torn Earth"
            preview={{ type: 'amazon', asin: 'B07K5C1GYT', ref: 'cm_sw_r_kb_dp_WJU5BbK5XQMR2' }}
            description={this.renderDescription()}
        />;
    }
}
