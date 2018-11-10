import * as React from 'react';

export class Author extends React.PureComponent<{}, never> {
    render() {
        return <React.Fragment>
            <p>Jasmin Gelinck is the author of two novels and several short stories in sci-fi and fantasy. Jasmin was born in Austria, but currently lives in the Netherlands, where she writes, plays video games, and reads too many books.</p>
        </React.Fragment>;
    }
}
