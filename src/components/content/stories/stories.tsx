import * as React from 'react';
import './style.scss';
import { CatchingFireflies } from './catching-fireflies';
import { ElegyOfTheStars } from './elegy-of-the-stars';
import { Iana } from './iana';
import { TheHungryWorlds } from './the-hungry-worlds';
import { IntoTheDeep } from './into-the-deep';
import { WarlikeTheTornEarth } from './warlike-the-torn-earth';
import { WorldsOfMagic } from './worlds-of-magic';
import { Xenos } from './xenos';

export class Stories extends React.PureComponent<{}, never> {
    render() {
        return <div className="stories-container">
            <Xenos />
            <WorldsOfMagic />
            <ElegyOfTheStars />
            <WarlikeTheTornEarth />
            <IntoTheDeep />
            <Iana />
            <CatchingFireflies />
            <TheHungryWorlds />
        </div>;
    }
}
