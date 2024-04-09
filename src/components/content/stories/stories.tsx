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
import { TheCrowbornPath } from './the-crowborn-path';
import { Auxiliary } from './auxiliary';
import { TheWishlordTrials } from './the-wishlord-trials';
import { TheAngelsOfPhnomPenh } from './the-angels-of-phnom-penh';

export class Stories extends React.PureComponent<{}, never> {
    render() {
        return <div className="stories-container">
            <TheAngelsOfPhnomPenh />
            <TheWishlordTrials />
            <Auxiliary />
            <TheCrowbornPath />
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
