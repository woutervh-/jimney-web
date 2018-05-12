import * as React from 'react';
import './style.scss';
import { CatchingFireflies } from './catching-fireflies';
import { ElegyOfTheStars } from './elegy-of-the-stars';
import { Iana } from './iana';
import { TheHungryWorlds } from './the-hungry-worlds';

export class Stories extends React.Component<{}, never> {
    render() {
        return <div className="stories-container">
            <ElegyOfTheStars />
            <Iana />
            <CatchingFireflies />
            <TheHungryWorlds />
        </div>;
    }
}
