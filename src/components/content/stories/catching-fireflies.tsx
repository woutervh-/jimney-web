import * as React from 'react';
import { Story } from './story';
import * as CatchingFirefliesImage from '../../../images/catching-fireflies.png';

export class CatchingFireflies extends React.Component<{}, never> {
    renderDescription() {
        return 'Description';
    }

    render() {
        return <Story title="Title" image={CatchingFirefliesImage} description={this.renderDescription()} />;
    }
}
