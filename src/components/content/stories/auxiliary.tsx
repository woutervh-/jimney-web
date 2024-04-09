import * as React from 'react';
import { Story } from './story';

export class Auxiliary extends React.PureComponent<{}, never> {
    renderDescription() {
        return <React.Fragment>
            <p>Two cities that should be one, at the brink of war.</p>
            <p>Auxiliary, home to mutants and the downtrodden, the poor and disadvantaged of society. Parthan, where the elite live, thrive, and commit acts of atrocity against their oppressed siblings in Aux.</p>
            <p>15 yo Rhuan Jia of Auxiliary deals with it all: gruelling work at the scrap belts by day, illegal lessons in becoming a medic at night. An oppressive older brother who'd prefer he stays a child forever, and definitely didn't sanction him becoming a medic, and worst, his ethereal and unsettling connection to the city as unrest grows between its two parts.</p>
            <p>Jia wants more from his life than sorting scrap metal on a conveyor belt, but his brother Rhuan Ven, the only family he has, restricts every way in which he can make his dream of becoming a medic a reality. His situation changes when, in the surgery where he helps out without Ven's knowledge at night, a renegade luminary with a terrible secret arrives, and the surgeon from which he's been learning kicks him out. His visions growing worse, Jia's almost entirely on his own, the only help he can get the boy he's falling in love with, and the war dog he nursed back to health as a child. As the tensions between Auxiliary and Parthan worsen, Jia has to make a choice: stay in the comfortable prison his brother's made for him, ignoring as the city screams in his mind, or fight to continue his quest for knowledge, even if that means questioning all he is, and knows.</p>
            <p>Varya Kolinova, enforcer, failed little sister to one of Parthan's most revered luminaries, is given her first assignment to save the city from the brewing Aux rebellion: find the arsonist who destroyed the ghost factory, X-1. She is given three and a half days to do it, but as she investigates, she finds there are more dangerous threats in Parthan than the Aux insurgents, and some of them are very close to home. An old colleague of her sister Visca, Argus Krane, seems to be involved in the case, and dead set on destroying them both. Soon, she can no longer be sure she's on the right side, or that the all-important luminaries are innocent.</p>
            <p>Adrian Trent, ex war commander, tyrant, and military bloodhound, has been in exile for fifty-nine years when he receives an order from his old friend and comrade, Parthan's president. Octavian calls him back to civilization with one task: catch an escaped luminary and make him face justice in Parthan. But when Trent sets out to complete this quest, things are not as clear cut as they first appear. Octavian disappears before Trent can make sense of the order, the luminary he's supposed to catch, and the situation in the twin city, which has not become what Octavian envisioned. Disillusioned, Trent faces a choice. Does he follow Octavian blindly as he did in the past, the loyal dog he's always been, or will he stand and fight for another cause entirely, and make their erstwhile dreams of a unified refuge for humanity come true?</p>
        </React.Fragment>;
    }

    render() {
        return <Story
            title="Auxiliary: The Living City Book I"
            preview={{ type: 'amazon', asin: 'B0CW1CSWLR' }}
            description={this.renderDescription()}
        />;
    }
}
