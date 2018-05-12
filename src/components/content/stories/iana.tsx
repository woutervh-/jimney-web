import * as React from 'react';
import { Story } from './story';
import * as IanaImage from '../../../images/iana.png';

export class Iana extends React.Component<{}, never> {
    renderDescription() {
        return 'Description';
    }

    render() {
        return <Story title="Title" image={IanaImage} description={this.renderDescription()} />;
    }
}
