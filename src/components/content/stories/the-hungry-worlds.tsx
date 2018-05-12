import * as React from 'react';
import { Story } from './story';
import * as TheHungryWorldsImage from '../../../images/the-hungry-worlds.jpg';

export class TheHungryWorlds extends React.Component<{}, never> {
    renderDescription() {
        return 'Description';
    }

    render() {
        return <Story title="Title" image={TheHungryWorldsImage} description={this.renderDescription()} />;
    }
}
