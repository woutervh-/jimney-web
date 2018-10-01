import * as React from 'react';
import { Story } from './story';
import * as TheHungryWorldsImage from '../../../images/the-hungry-worlds.jpg';

export class TheHungryWorlds extends React.Component<{}, never> {
    renderDescription() {
        return <p>
            After stealing an expensive sword, thief Ristar's conscience leads her to investigate the source of ravenous energy coming from the Troll's Forest.
        </p>;
    }

    render() {
        return <Story
            title="The Hungry Worlds"
            image={TheHungryWorldsImage}
            imageOffsetY={0}
            description={this.renderDescription()}
        />;
    }
}
