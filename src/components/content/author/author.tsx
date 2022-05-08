import * as React from 'react';
import * as PortaitPicture from 'images/20211120_170324.jpg?size=260';
import './style.scss';

export class Author extends React.PureComponent<{}, never> {
    render() {
        return <React.Fragment>
            <img src={PortaitPicture} className="portrait-picture" />
            <p>Jasmin Gelinck (she/her) is a sci-fi and fantasy writer from Austria, currently residing in the Netherlands. Jasmin loves challenges (in sports, on the page, in nature), games, soft and friendly things, and long hikes through the middle of nowhere. Her stories often deal with darker things, however, there'll always be a ray of hope at the end.</p>
        </React.Fragment>;
    }
}
