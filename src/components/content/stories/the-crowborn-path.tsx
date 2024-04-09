import * as React from 'react';
import { Story } from './story';

export class TheCrowbornPath extends React.PureComponent<{}, never> {
    renderDescription() {
        return <React.Fragment>
            <p>Fey diplomat Aaea Crowborn's come to the human city of Isar to work and have fun, not necessarily in that order. But when she meets Isolde, the distractingly beautiful princess of Island, and a voidhunter demon murders one of her fey kin, she has to put aside her quest for amusement and don her peacekeeper's hat. Who's targeting the fey of Isar and Atsaad? What do they want with Aaea?</p>
            <p>When Aaea's pursuit of the culprit sees her accused of murder herself, she has to take Isolde's offers to flee to Atsaad - at the heart of the slayings. There, her hunt continues, but the dark powers threatening the human world might not be ones she can fight - or want to, when she finds out the truth of what they want, and she might gain if they get their way.</p>
        </React.Fragment>;
    }

    render() {
        return <Story
            title="The Crowborn Path"
            preview={{ type: 'amazon', asin: 'B0BNXGCNCB' }}
            description={this.renderDescription()}
        />;
    }
}
