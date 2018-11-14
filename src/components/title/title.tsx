import * as React from 'react';
import './style.scss';

export class Title extends React.PureComponent<{}, never> {
    render() {
        return <h1 className="title">Jasmin Gelinck</h1>;
    }
}
