import * as React from 'react';
import * as ReactRouterDOM from 'react-router-dom';
import { Chapter1 } from './chapter-1';
import { Chapter2 } from './chapter-2';
import { Chapter3 } from './chapter-3';
import { Chapter4 } from './chapter-4';
import { Chapter5 } from './chapter-5';
import { Chapter6 } from './chapter-6';
import { Chapter7 } from './chapter-7';
import { Chapter8 } from './chapter-8';
import { Epilogue } from './epilogue';

export class ElegyOfTheStars extends React.PureComponent<{}, never> {
    render() {
        return <React.Fragment>
            <ReactRouterDOM.Routes>
                <ReactRouterDOM.Route path="/read/elegy-of-the-stars" element={<Chapter1 />} />
                <ReactRouterDOM.Route path="/read/elegy-of-the-stars/2" element={<Chapter2 />} />
                <ReactRouterDOM.Route path="/read/elegy-of-the-stars/3" element={<Chapter3 />} />
                <ReactRouterDOM.Route path="/read/elegy-of-the-stars/4" element={<Chapter4 />} />
                <ReactRouterDOM.Route path="/read/elegy-of-the-stars/5" element={<Chapter5 />} />
                <ReactRouterDOM.Route path="/read/elegy-of-the-stars/6" element={<Chapter6 />} />
                <ReactRouterDOM.Route path="/read/elegy-of-the-stars/7" element={<Chapter7 />} />
                <ReactRouterDOM.Route path="/read/elegy-of-the-stars/8" element={<Chapter8 />} />
                <ReactRouterDOM.Route path="/read/elegy-of-the-stars/epilogue" element={<Epilogue />} />
            </ReactRouterDOM.Routes>
        </React.Fragment>;
    }
}
