import * as React from 'react';
import './style.scss';
import { CatchingFireflies } from './catching-fireflies';
import { ElegyOfTheStars } from './elegy-of-the-stars';
import { Iana } from './iana';
import { TheHungryWorlds } from './the-hungry-worlds';
import { IntoTheDeep } from './into-the-deep';

export class Stories extends React.PureComponent<{}, never> {
    render() {
        return <div className="stories-container">
            <ElegyOfTheStars />
            <IntoTheDeep />
            <Iana />
            <CatchingFireflies />
            <TheHungryWorlds />
        </div>;
    }
}
