import * as React from 'react';
import * as PortaitPicture from 'images/20211120_170324.jpg?size=260';
import './style.scss';

export class Author extends React.PureComponent<{}, never> {
    render() {
        return <React.Fragment>
            <img src={PortaitPicture} className="portrait-picture" />
            <p>Jasmin Gelinck writes sci-fi and fantasy with gay guys and gals. Jasmin was born in Austria, but currently lives in the Netherlands. She doesn't really know why she's typing this in the third person, but hey, that seems to be the popular style.</p>
            <p>In any case, Jasmin really hopes you'll enjoy her books, and that you'll review one (or all!) of her books! ❤️</p>
        </React.Fragment>;
    }
}
